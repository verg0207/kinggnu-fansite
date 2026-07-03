// King Gnu CEN+RAL Tour 2026 官方场次
// 数据来源：kinggnu.jp / clubgnu.com / rockinon.com / skream.jp / sonymusic.co.jp
// 更新时间：2026-07-04（部分场次已过，保留供归档展示）

export type Show = {
  date: string; // YYYY-MM-DD
  city: string;
  venue: string;
  status: "ended" | "on-sale" | "coming" | "tba";
  ticketUrl: string;
  region: "japan" | "asia";
};

export const shows: Show[] = [
  // ===== 日本 =====
  { date: "2026-02-21", city: "宮城 Miyagi", venue: "セキスイハイム スーパーアリーナ", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-02-22", city: "宮城 Miyagi", venue: "セキスイハイム スーパーアリーナ", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-03-03", city: "大阪 Osaka", venue: "大阪城ホール", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-03-04", city: "大阪 Osaka", venue: "大阪城ホール", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-03-11", city: "香川 Kagawa", venue: "あなぶきアリーナ香川", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-03-12", city: "香川 Kagawa", venue: "あなぶきアリーナ香川", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-03-18", city: "東京 Tokyo", venue: "有明アリーナ", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-03-19", city: "東京 Tokyo", venue: "有明アリーナ", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-03-28", city: "名古屋 Nagoya", venue: "ポートメッセなごや 第1展示館", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-03-29", city: "名古屋 Nagoya", venue: "ポートメッセなごや 第1展示館", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-04-04", city: "広島 Hiroshima", venue: "広島グリーンアリーナ", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-04-05", city: "広島 Hiroshima", venue: "広島グリーンアリーナ", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-04-14", city: "千葉 Chiba", venue: "LaLa arena TOKYO-BAY", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-04-15", city: "千葉 Chiba", venue: "LaLa arena TOKYO-BAY", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-04-21", city: "福岡 Fukuoka", venue: "マリンメッセ福岡 A館", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-04-22", city: "福岡 Fukuoka", venue: "マリンメッセ福岡 A館", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-05-01", city: "札幌 Sapporo", venue: "真駒内セキスイハイムアイスアリーナ", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-05-02", city: "札幌 Sapporo", venue: "真駒内セキスイハイムアイスアリーナ", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-05-09", city: "新潟 Niigata", venue: "朱鷺メッセ", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },
  { date: "2026-05-10", city: "新潟 Niigata", venue: "朱鷺メッセ", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "japan" },

  // ===== 亚洲巡演 =====
  { date: "2026-05-23", city: "バンコク Bangkok", venue: "One Bangkok Forum", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "asia" },
  { date: "2026-05-29", city: "香港 Hong Kong", venue: "AsiaWorld-Arena", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "asia" },
  { date: "2026-05-30", city: "香港 Hong Kong", venue: "AsiaWorld-Arena", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "asia" },
  { date: "2026-06-06", city: "台北 Taipei", venue: "Taipei Arena", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "asia" },
  { date: "2026-06-07", city: "台北 Taipei", venue: "Taipei Arena", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "asia" },
  { date: "2026-06-13", city: "上海 Shanghai", venue: "TBA", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "asia" },
  { date: "2026-06-14", city: "上海 Shanghai", venue: "TBA", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "asia" },
  { date: "2026-06-20", city: "ソウル Seoul", venue: "KSPO DOME", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "asia" },
  { date: "2026-06-21", city: "ソウル Seoul", venue: "KSPO DOME", status: "ended", ticketUrl: "https://kinggnu.jp/live/", region: "asia" },

  // ===== TOUR FINAL =====
  { date: "2026-07-15", city: "横浜 Yokohama", venue: "横浜アリーナ（TOUR FINAL・WOWOW / Lemino / Stagecrowd 生中継）", status: "on-sale", ticketUrl: "https://kinggnu.jp/live/", region: "japan" }
];
