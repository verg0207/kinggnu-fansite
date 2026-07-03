const stores = [
  {
    name: "King Gnu Official Store",
    desc: "官方旗舰周边店，覆盖专辑、Tee、Tote、演出限定等。",
    url: "https://kinggnu-store.jp/"
  },
  {
    name: "Sony Music Shop",
    desc: "初回限定、SHM-CD、Blu-ray 等实体音乐周边。",
    url: "https://www.sonymusicshop.jp/"
  },
  {
    name: "PERIMETRON",
    desc: "常田大希主导创意团队周边，含 millennium parade 联名。",
    url: "https://perimetron.tokyo/"
  }
];

const highlights = [
  {
    title: "Tour Tee",
    hint: "巡演限定 T 恤，通常仅在场馆及官方 Store 短期上架。"
  },
  {
    title: "初回限定盘 CD",
    hint: "包含额外 Blu-ray / 写真 booklet，收藏价值高。"
  },
  {
    title: "Acrylic Stand",
    hint: "亚克力立牌，成员周边中最热门的品类之一。"
  }
];

export default function MerchPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <p className="text-accent text-xs tracking-[0.4em] mb-2">MERCH</p>
      <h1 className="font-display text-5xl md:text-6xl mb-6">周边</h1>
      <p className="text-paper/80 max-w-2xl mb-10">
        本站不销售商品，仅收录官方商店与常见周边品类。请优先通过官方渠道购买，避免盗版与二手溢价。
      </p>

      <h2 className="font-display text-3xl mb-4">官方购买渠道</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {stores.map((s) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noreferrer noopener"
            className="block border border-white/10 hover:border-accent p-6 transition"
          >
            <div className="font-semibold">{s.name}</div>
            <p className="text-sm text-paper/70 mt-2">{s.desc}</p>
            <div className="text-accent text-xs mt-4 tracking-widest">
              前往店铺 →
            </div>
          </a>
        ))}
      </div>

      <h2 className="font-display text-3xl mt-14 mb-4">常见周边品类</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {highlights.map((h) => (
          <div key={h.title} className="border border-white/10 p-6">
            <div className="font-display text-2xl">{h.title}</div>
            <p className="text-sm text-paper/70 mt-2">{h.hint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
