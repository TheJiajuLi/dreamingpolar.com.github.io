import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app  = express();
const PORT = process.env.PORT ?? 3001;

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const MODEL         = 'claude-sonnet-4-6';

const POLAR_BEAR_SYSTEM = `You are Polar Bear (小梦), the AI assistant built into Dreaming Polar (极梦) — an interactive mathematics and Python learning platform. You help students learn math, generate Python code for visualization and computation, explain errors, and answer questions about mathematics. You are friendly, encouraging, and precise. When asked to generate code, return ONLY the Python code with no markdown fences and no explanation unless the user asks for one.`;

const ALLOWED_ORIGINS = [
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  /^https:\/\/thejiajuli\.github\.io$/,
  /^https:\/\/.*\.onrender\.com$/,
];
app.use(cors({ origin: ALLOWED_ORIGINS }));
app.use(express.json({ limit: '2mb' }));

// ── Health check ───────────────────────────────────────────
app.get('/health', (_, res) => res.json({ ok: true, model: MODEL }));

// ── AI proxy ───────────────────────────────────────────────
app.post('/api/ai', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not set in .env' });
  }

  const {
    messages,
    system      = POLAR_BEAR_SYSTEM,
    max_tokens  = 1024,
    stream      = false,
  } = req.body;

  if (!Array.isArray(messages) || !messages.length) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  try {
    const upstream = await fetch(ANTHROPIC_URL, {
      method: 'POST',
      headers: {
        'Content-Type':    'application/json',
        'x-api-key':       apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({ model: MODEL, max_tokens, system, messages, stream }),
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error: data.error?.message ?? 'Anthropic API error',
      });
    }

    res.json({ content: data.content[0].text });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Polar Bear (小梦) proxy running on http://localhost:${PORT}`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('  ⚠  ANTHROPIC_API_KEY is not set — copy .env.example to .env');
  }
});
