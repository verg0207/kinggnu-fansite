import { social } from "./social";

export type YTVideo = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
};

// 通过 YouTube 频道 RSS 无 Key 拉取（每次构建/ISR 会自动更新）
// RSS 格式：https://www.youtube.com/feeds/videos.xml?channel_id=UCxxx
// 免鉴权、公开数据；受频道公开可见性限制
export async function fetchYouTubeRSS(): Promise<YTVideo[]> {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${social.youtube.channelId}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 900 }, // 15 分钟 ISR
      headers: { "user-agent": "kinggnu-fanhub/1.0" }
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseYouTubeRSS(xml).slice(0, 12);
  } catch {
    return [];
  }
}

function parseYouTubeRSS(xml: string): YTVideo[] {
  const entries = xml.split("<entry>").slice(1);
  const items: YTVideo[] = [];
  for (const e of entries) {
    const id = match(e, /<yt:videoId>([^<]+)<\/yt:videoId>/);
    const title = decode(match(e, /<title>([^<]+)<\/title>/));
    const publishedAt = match(e, /<published>([^<]+)<\/published>/);
    const thumbnail = match(e, /<media:thumbnail url="([^"]+)"/);
    if (!id) continue;
    items.push({
      id,
      title,
      publishedAt,
      thumbnail,
      url: `https://www.youtube.com/watch?v=${id}`
    });
  }
  return items;
}

function match(input: string, re: RegExp): string {
  const m = input.match(re);
  return m ? m[1] : "";
}

function decode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
