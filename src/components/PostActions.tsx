"use client";

import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";

export function PostActions() {
  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied!");
    }
  };

  return (
    <div className="flex items-center gap-3 mb-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm"
      >
        <ArrowLeft size={16} />
        Back
      </Link>

      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium text-sm hover:opacity-90"
      >
        <Share2 size={16} />
        Share Post
      </button>
    </div>
  );
}
