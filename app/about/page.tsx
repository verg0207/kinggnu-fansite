const members = [
  {
    name: "常田 大希 / Daiki Tsuneta",
    role: "Vo / Gt / Key — 主创",
    bio: "乐队核心创作者，同时主导 millennium parade 项目。以古典乐（大提琴）为底色，融合摇滚、Hip-Hop 与电子。"
  },
  {
    name: "井口 理 / Satoru Iguchi",
    role: "Vo / Key",
    bio: "拥有假声与真声兼备的独特声线，是 King Gnu 高辨识度的标志。"
  },
  {
    name: "新井 和輝 / Kazuki Arai",
    role: "Ba",
    bio: "毕业于东京艺大爵士系，贝斯风格细腻扎实，为乐队律动奠基。"
  },
  {
    name: "勢喜 遊 / Yu Seki",
    role: "Dr",
    bio: "东京艺大爵士鼓手，音色富有层次，为 King Gnu 提供节奏支点。"
  }
];

const timeline = [
  { year: "2013", event: "常田大希组建前身 Srv.Vinci" },
  { year: "2017", event: "更名 King Gnu，独立发行首张专辑《Tokyo Rendez-Vous》" },
  { year: "2019", event: "《白日》成为 NHK 剧集主题曲，全国爆红" },
  { year: "2020", event: "《三文小说》登上红白" },
  { year: "2022", event: "参与《咒术回战 0》主题曲《一途》" },
  { year: "2023", event: "「THE GREATEST UNKNOWN」世界巡演展开" }
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <p className="text-accent text-xs tracking-[0.4em] mb-2">BAND</p>
      <h1 className="font-display text-5xl md:text-6xl mb-6">乐队介绍</h1>
      <p className="text-paper/80 max-w-3xl leading-relaxed">
        King Gnu（キングヌー）是 2017
        年在东京组建的四人摇滚乐队，成员均具备古典与爵士训练背景，作品跨越摇滚、爵士、放克、Hip-Hop
        与流行等多重语汇，是日本当代主流乐坛最具代表性的乐队之一。
      </p>

      <h2 className="font-display text-3xl mt-14 mb-6">成员 / Members</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {members.map((m) => (
          <div key={m.name} className="border border-white/10 p-6">
            <div className="font-semibold text-lg">{m.name}</div>
            <div className="text-accent text-xs tracking-widest mt-1">
              {m.role}
            </div>
            <p className="mt-3 text-sm text-paper/70 leading-relaxed">
              {m.bio}
            </p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-3xl mt-14 mb-6">编年史 / Timeline</h2>
      <ol className="relative border-l border-white/10 pl-6 space-y-6">
        {timeline.map((t) => (
          <li key={t.year} className="relative">
            <span className="absolute -left-[31px] top-1 w-3 h-3 bg-accent rounded-full" />
            <div className="font-display text-2xl text-accent">{t.year}</div>
            <div className="text-paper/80">{t.event}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
