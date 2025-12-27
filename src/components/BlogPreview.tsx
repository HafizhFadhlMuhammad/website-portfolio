import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/src/data/blog";

export default function BlogPreview() {
  const first = blogPosts[0];

  return (
    <section className="mt-20">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Blogs</h2>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200"
        >
          more <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900/25 p-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="text-lg font-semibold">{first?.title}</div>
            <div className="mt-2 text-sm text-zinc-400">{first?.excerpt}</div>
          </div>
          <div className="shrink-0 text-sm font-medium text-zinc-300">
            {first?.date}
          </div>
        </div>
      </div>
    </section>
  );
}