import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app  = express();
const PORT = process.env.PORT ?? 3001;

// 魔芋AI — OpenAI-compatible endpoint
const MOYU_URL = 'https://www.moyu.info/v1/chat/completions';
const MODEL    = 'deepseek-reasoner';

const POLAR_BEAR_SYSTEM = `You are Polar Bear (小梦), the AI assistant built into Dreaming Polar (极梦) — an interactive mathematics and Python learning platform. You help students learn math, generate Python code for visualization and computation, explain errors, and answer questions about mathematics. You are friendly, encouraging, and precise. When asked to generate code, return ONLY the Python code with no markdown fences and no explanation unless the user asks for one.`;

const ALLOWED_ORIGINS = [
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://dreamingpolar.com',
  'https://www.dreamingpolar.com',
  /^https:\/\/thejiajuli\.github\.io$/,
  /^https:\/\/.*\.onrender\.com$/,
];
app.use(cors({ origin: ALLOWED_ORIGINS }));
app.use(express.json({ limit: '2mb' }));

// ── Health check ───────────────────────────────────────────
app.get('/health', (_, res) => res.json({ ok: true, model: MODEL }));

// ── AI proxy ───────────────────────────────────────────────
app.post('/api/ai', async (req, res) => {
  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'AI_API_KEY not set in .env' });
  }

  const {
    messages,
    system     = POLAR_BEAR_SYSTEM,
    max_tokens = 1024,
  } = req.body;

  if (!Array.isArray(messages) || !messages.length) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  // OpenAI format: system goes as first message
  const fullMessages = [{ role: 'system', content: system }, ...messages];

  const abort = new AbortController();
  const timer = setTimeout(() => abort.abort(), 60_000); // 60s timeout

  try {
    const upstream = await fetch(MOYU_URL, {
      method: 'POST',
      signal: abort.signal,
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model: MODEL, max_tokens, messages: fullMessages }),
    });
    clearTimeout(timer);

    const data = await upstream.json();
    console.log(`[ai] ${upstream.status}`, JSON.stringify(data).slice(0, 200));

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error: data.error?.message ?? JSON.stringify(data),
      });
    }

    res.json({ content: data.choices[0].message.content });

  } catch (e) {
    clearTimeout(timer);
    console.error('[ai] fetch error:', e.message);
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Polar Bear (小梦) proxy running on http://localhost:${PORT}`);
  if (!process.env.AI_API_KEY) {
    console.warn('  ⚠  AI_API_KEY is not set — add it to backend/.env');
  }
});
