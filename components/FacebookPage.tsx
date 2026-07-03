"use client";
import { useEffect } from "react";
import { social } from "@/lib/social";

// Facebook Page Plugin: 免 access token，直接嵌入
// 参考: https://developers.facebook.com/docs/plugins/page-plugin/
export default function FacebookPage() {
  useEffect(() => {
    if (document.getElementById("fb-root")) return;
    const root = document.createElement("div");
    root.id = "fb-root";
    document.body.appendChild(root);
    const s = document.createElement("script");
    s.async = true;
    s.defer = true;
    s.crossOrigin = "anonymous";
    s.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
    document.body.appendChild(s);
  }, []);
  return (
    <div
      className="fb-page"
      data-href={social.facebook.url}
      data-tabs="timeline"
      data-width="500"
      data-height="700"
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="false"
    >
      <blockquote cite={social.facebook.url} className="fb-xfbml-parse-ignore">
        <a href={social.facebook.url}>King Gnu on Facebook</a>
      </blockquote>
    </div>
  );
}
