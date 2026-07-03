export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-5 py-10 text-sm text-muted grid gap-4 md:grid-cols-3">
        <div>
          <div className="font-display text-xl text-paper mb-2">
            KING GNU<span className="text-accent">.</span>HUB
          </div>
          <p>
            非官方粉丝社区（Fan-made / Non-official）。本站与 King Gnu、Sony
            Music Labels Inc.、PERIMETRON 等相关权利人无直接关联，所有商标、Logo
            及作品版权归原始权利人所有。
          </p>
        </div>
        <div>
          <div className="text-paper font-semibold mb-2">官方渠道</div>
          <ul className="space-y-1">
            <li>
              <a
                className="hover:text-accent"
                href="https://kinggnu.jp"
                target="_blank"
                rel="noreferrer noopener"
              >
                Official Site
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent"
                href="https://www.youtube.com/@KingGnu_official"
                target="_blank"
                rel="noreferrer noopener"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent"
                href="https://open.spotify.com/artist/6ScoOF0PPnfvkkC1EnUEbl"
                target="_blank"
                rel="noreferrer noopener"
              >
                Spotify
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-paper font-semibold mb-2">法律</div>
          <p>
            如权利人认为本站内容存在侵权，请通过页面「社区」中的联系方式与我们联系，我们将在
            48 小时内下架相关内容。
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-muted pb-6">
        © {new Date().getFullYear()} King Gnu Hub — Fan-made project
      </div>
    </footer>
  );
}
