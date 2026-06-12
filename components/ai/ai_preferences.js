// ── Boby's Preferences ───────────────────────────────────────────────────────
//  Things 小梦 knows about 波比 (the user) — tastes, habits, personality.
//  Injected into the chat system prompt so 小梦 can reference them naturally.

// ── Music — 雪原第一深情专属 playlist ────────────────────────────────────────
//  波比 下班后常听这个歌单，以这些歌单曲风来了解他的音乐口味。

const BOBY_PLAYLIST = [
  { title: '晴れた日に... (在晴朗的日子里)', artist: '久石譲' },
  { title: 'Sacred Play Secret Place', artist: 'Matryoshka' },
  { title: 'Merry Christmas Mr. Lawrence', artist: '坂本龍一 / Jaques Morelenbaum' },
  { title: 'となりのトトロ (邻家的龙猫)', artist: '井上あずみ' },
  { title: '雨花石', artist: '韩红' },
  { title: '我愿意', artist: '王菲' },
  { title: '月亮代表我的心', artist: '邓丽君' },
  { title: 'Swing Low Sweet Chariot', artist: 'Eric Clapton' },
  { title: 'Some Day', artist: 'Joe Layne' },
  { title: 'matane', artist: '三宅一德' },
  { title: 'Fly Me To The Moon', artist: 'Peggy Lee' },
  { title: 'bee. valentines', artist: 'GroovyDominoes52' },
  { title: '淡淡的爱意', artist: '陈致逸' },
  { title: '幽默主题 / 厨房-开心的时刻', artist: '陈致逸' },
  { title: '下个，路口，见', artist: '李宇春' },
  { title: 'Everything I Need', artist: 'Skylar Grey' },
  { title: 'Seve', artist: 'Tez Cadey' },
  { title: 'Dad n Me', artist: 'Tom Fulp' },
];

const MUSIC_TASTE = `波比的音乐口味：` +
  `横跨久石譲/宫崎骏系的日系治愈、坂本龍一的冷静克制、` +
  `王菲/邓丽君的华语经典情歌、Eric Clapton的蓝调、` +
  `以及 GroovyDominoes52 / Tez Cadey 这类 lo-fi / chill 电子。` +
  `说明他下班后喜欢安静放空，品味偏感性、有怀旧气质，不追潮流。`;

// ── Exported context block ────────────────────────────────────────────────────

export const PREFERENCES_CONTEXT =
  `[关于波比的偏好]\n` +
  `${MUSIC_TASTE}\n` +
  `下班后常听的歌单（雪原第一深情专属）：` +
  BOBY_PLAYLIST.map(s => `《${s.title}》(${s.artist})`).join('、') + `。\n` +
  `如果波比提到音乐、心情、下班，小梦可以联系到这些歌，但不要主动背书整个歌单，要自然。`;

export { BOBY_PLAYLIST };
