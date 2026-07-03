"use client";
import { useEffect, useRef } from "react";
import { social } from "@/lib/social";

export default function TwitterTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    if (document.getElementById("twitter-wjs")) {
      // @ts-expect-error twttr injected by script
      window?.twttr?.widgets?.load?.(ref.current);
      return;
    }
    const s = document.createElement("script");
    s.id = "twitter-wjs";
    s.src = "https://platform.twitter.com/widgets.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);
  return (
    <div ref={ref}>
      <a
        className="twitter-timeline"
        data-theme="dark"
        data-height="700"
        data-chrome="noheader nofooter transparent"
        href={`https://twitter.com/${social.twitter.handle}?ref_src=twsrc%5Etfw`}
      >
        Tweets by @{social.twitter.handle}
      </a>
    </div>
  );
}
