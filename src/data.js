// رابط الدفع عبر Bybit — استبدله برابط Bybit Pay الخاص بك
// يمكنك استخدام {product} و {price} كمتغيرات داخل الرابط.
export const BYBIT_CHECKOUT_URL = "https://www.bybit.com/";


export const categories = [
  {
    id: "games",
    title: "ألعاب ✍️",
    items: [
      {
        id: "pubg-mobile",
        name: "ببجي موبايل",
        url: "https://www.pubgmobile.com/",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/PUBG_Studios_Logo.svg/960px-PUBG_Studios_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      },
      {
        id: "crossfire",
        name: "كروس فاير",
        url: "https://www.crossfire.com/",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Crossfire-heading.png",
      },
      {
        id: "free-fire",
        name: "فري فاير",
        url: "https://ff.garena.com/",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Freefirelogo.png",
      },
      {
        id: "brawl-stars",
        name: "براول ستارز",
        url: "https://supercell.com/en/games/brawlstars/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDlytiE178sfY8uXNj7aIesE2rM7gGOwjFCmb9VVEWJ7JAoUDaNYQZxuRG5iFNXAxvJRJAA&s=10",
      },
      {
        id: "fortnite",
        name: "Fortnite",
        url: "https://www.fortnite.com/",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fortnite.png",
      },
    ],
  },
  {
    id: "cards",
    title: "بطاقات ✍️",
    items: [
      {
        id: "nexon",
        name: "Nexon",
        url: "https://www.nexon.com/main/en",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/NEXTON_Logo.png",
      },
      {
        id: "gocash",
        name: "GoCash",
        url: "https://www.games2egypt.com/gift-cards",
        image: "https://www.games2egypt.com/favicon.ico",
      },
      {
        id: "playstation",
        name: "بلايستيشن",
        url: "https://www.playstation.com/",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/PlayStation_black_logo.png",
      },
      {
        id: "xbox",
        name: "Xbox",
        url: "https://www.microsoft.com/en-us/store/b/gift-cards",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xbox_logo.png",
      },
      {
        id: "lucky",
        name: "ولاكي",
        url: "https://www.seagm.com/",
        image: "https://www.seagm.com/favicon.ico",
      },
      {
        id: "netflix-card",
        name: "نتفليكس",
        url: "https://www.netflix.com/gift-cards",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Netflix-Logo.png",
      },
      {
        id: "itunes",
        name: "iTunes / Apple Gift Card",
        url: "https://www.apple.com/shop/gift-cards",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple_gray_logo.png",
      },
      {
        id: "razer",
        name: "Razer Gold",
        url: "https://www.razer.com/mena-en/razer-gold-pin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbU3ewZTUhiVY2hZ9l8lWbB81wwMShdZ8XBhEGzy5lew&s=10",
      },
      {
        id: "seagm",
        name: "SEAGM",
        url: "https://www.seagm.com/",
        image: "https://www.seagm.com/favicon.ico",
      },
    ],
  },
  {
    id: "subscriptions",
    title: "اشتراكات ✍️",
    items: [
      {
        id: "spotify",
        name: "Spotify",
        url: "https://www.spotify.com/premium/",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Spotify.png",
      },
      {
        id: "netflix",
        name: "Netflix",
        url: "https://www.netflix.com/",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Netflix-Logo.png",
      },
      {
        id: "chatgpt",
        name: "ChatGPT",
        url: "https://chatgpt.com/",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/ChatGPT_logo.svg",
      },
      {
        id: "gemini",
        name: "Gemini",
        url: "https://gemini.google.com/",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Google-gemini-icon.png",
      },
      {
        id: "claude",
        name: "Claude",
        url: "https://claude.ai/",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Claude_AI_logo.png",
      },
    ],
  },
];

export const allProducts = categories.flatMap((c) =>
  c.items.map((p) => ({ ...p, category: c.title }))
);

export const findProduct = (id) => allProducts.find((p) => p.id === id);

// أسعار عشوائية (USDT) — ثابتة لكل منتج حتى لا تتغير عند تحديث الصفحة
function seeded(seed) {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return () => {
    h = (h * 1664525 + 1013904223) >>> 0;
    return h / 4294967296;
  };
}

export function getPlans(id) {
  const rand = seeded(id);
  const base = Math.round((2 + rand() * 18) * 2) / 2; // 2 – 20
  return [1, 2.5, 5, 10].map((m, i) => ({
    id: i,
    label: ["أساسي", "قياسي", "متقدم", "مميز"][i],
    price: +(base * m).toFixed(2),
  }));
}
