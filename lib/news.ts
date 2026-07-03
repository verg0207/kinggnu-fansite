export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  source: string;
  url: string;
  excerpt: string;
};

// 真实公开新闻摘要 + 官方出处链接
// 更新时间：2026-07-04
export const news: NewsItem[] = [
  {
    slug: "central-tour-final-yokohama",
    date: "2026-07-15",
    title: "「CEN+RAL Tour 2026」ツアーファイナル 横浜アリーナで開催",
    source: "Sony Music",
    url: "https://www.sonymusic.co.jp/artist/kinggnu/info/583066",
    excerpt:
      "King Gnu 史上最大规模巡演的收官场次落地横浜アリーナ，WOWOW Live / WOWOW On Demand / Lemino / Stagecrowd 多平台同步生中継。"
  },
  {
    slug: "aizo-release",
    date: "2026-02-11",
    title: "新单曲『AIZO』TVアニメ『呪術廻戦』第3期「死滅回游」OP テーマ",
    source: "kinggnu.jp",
    url: "https://kinggnu.jp/music/AIZO/",
    excerpt:
      "AIZO 作为《咒术回战》第 3 期「死灭回游」开场主题曲，于 2026 年 2 月 11 日发行。此前 King Gnu 已多次参与《咒术回战》系列音乐制作（一途、SPECIALZ）。"
  },
  {
    slug: "central-tour-2026-announce",
    date: "2025-10-09",
    title: "「King Gnu CEN+RAL Tour 2026」乐队史上最多场次巡演开催決定",
    source: "rockin'on.com",
    url: "https://rockinon.com/news/detail/212902",
    excerpt:
      "覆盖仙台、大阪、高松、东京、名古屋、广岛、千叶、福冈、札幌、新潟 10 座日本城市，及曼谷、香港、台北、上海、首尔 5 座亚洲城市，共 15 城。"
  },
  {
    slug: "so-bad-release",
    date: "2025-09-05",
    title: "新单曲『SO BAD』配信リリース",
    source: "King Gnu Official",
    url: "https://www.youtube.com/watch?v=b-uolrebi5M",
    excerpt:
      "2025 年秋季配信单曲 SO BAD，Official MV 同步公开。"
  },
  {
    slug: "twilight-release",
    date: "2025-04-18",
    title: "新单曲『TWILIGHT!!!』リリース",
    source: "King Gnu Official",
    url: "https://www.youtube.com/watch?v=bPGvr6G4ddU",
    excerpt: "TWILIGHT!!! 配信开始，Official MV 同步上线。"
  },
  {
    slug: "dome-tour-live-album",
    date: "2024-10-04",
    title: "『King Gnu Dome Tour THE GREATEST UNKNOWN at TOKYO DOME』ライブ盘发行",
    source: "kinggnu.jp",
    url: "https://kinggnu.jp/music/",
    excerpt:
      "东京巨蛋巡演现场专辑发行，Blu-ray 版于 2024 年 9 月 25 日先行。"
  }
];
