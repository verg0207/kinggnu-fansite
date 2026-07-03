import { shows, type Show } from "@/lib/shows";

const badgeStyle = (s: Show["status"]) =>
  s === "on-sale"
    ? "bg-accent text-paper"
    : s === "coming"
      ? "border border-accent text-accent"
      : s === "tba"
        ? "border border-white/30 text-paper/70"
        : "border border-white/10 text-muted";

const badgeText = (s: Show["status"]) =>
  s === "on-sale"
    ? "开票中"
    : s === "coming"
      ? "即将开票"
      : s === "tba"
        ? "待发布"
        : "已结束";

function Section({ title, list }: { title: string; list: Show[] }) {
  if (!list.length) return null;
  return (
    <div className="mt-10">
      <h2 className="font-display text-3xl mb-4">{title}</h2>
      <div className="border border-white/10 divide-y divide-white/10">
        {list.map((s) => (
          <div
            key={s.date + s.venue}
            className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          >
            <div>
              <div className="font-display text-2xl">{s.date}</div>
              <div className="text-paper/80">
                {s.city} · {s.venue}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={`text-xs px-3 py-1 tracking-widest ${badgeStyle(s.status)}`}
              >
                {badgeText(s.status)}
              </span>
              <a
                href={s.ticketUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="border border-white/30 hover:border-accent hover:text-accent px-4 py-2 text-sm whitespace-nowrap"
              >
                前往官方 →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TicketsPage() {
  const upcoming = shows.filter((s) => s.status !== "ended");
  const past = shows.filter((s) => s.status === "ended");
  const asiaPast = past.filter((s) => s.region === "asia");
  const japanPast = past.filter((s) => s.region === "japan");

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <p className="text-accent text-xs tracking-[0.4em] mb-2">TICKETS</p>
      <h1 className="font-display text-5xl md:text-6xl mb-4">购票 · 巡演</h1>
      <p className="text-paper/80 max-w-3xl">
        <strong>King Gnu CEN+RAL Tour 2026</strong>{" "}
        —— 乐队史上最大规模巡演，覆盖日本 10 城 + 亚洲 5 城，共 29
        场 +（横浜アリーナ TOUR FINAL）。
        本站不销售任何门票，仅聚合公开演出信息并导向官方票务方。
        请勿在非官方渠道购票，谨防倒票与诈骗。
      </p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
        <div className="border border-white/10 p-4">
          <div className="font-display text-3xl text-accent">29+</div>
          <div className="text-xs text-muted mt-1">SHOWS</div>
        </div>
        <div className="border border-white/10 p-4">
          <div className="font-display text-3xl text-accent">15</div>
          <div className="text-xs text-muted mt-1">CITIES</div>
        </div>
        <div className="border border-white/10 p-4">
          <div className="font-display text-3xl text-accent">JP + Asia</div>
          <div className="text-xs text-muted mt-1">REGION</div>
        </div>
        <div className="border border-white/10 p-4">
          <div className="font-display text-3xl text-accent">Feb–Jul</div>
          <div className="text-xs text-muted mt-1">2026</div>
        </div>
      </div>

      <Section title="即将开演 / Upcoming" list={upcoming} />
      <Section title="亚洲巡演回顾 / Asia" list={asiaPast} />
      <Section title="日本巡演回顾 / Japan" list={japanPast} />

      <div className="mt-10 text-sm text-muted">
        <p>
          日本场次票价（含税）：Arena Standing ¥16,000 / Stand Reserved
          ¥14,000。亚洲各站票价与售票商各地不同，以当地公告为准。
        </p>
        <p className="mt-2">
          售票合作方：日本 e+ (eplus.jp) / Ticket Pia / Lawson Ticket；海外场次由当地官方伙伴负责，请以
          <a
            className="text-accent hover:underline"
            href="https://kinggnu.jp/live/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            kinggnu.jp/live
          </a>{" "}
          为准。
        </p>
      </div>
    </div>
  );
}
