import { blogPosts } from "@/src/data/blog";

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-4xl font-semibold">Blog</h1>
        <p className="mt-3 text-zinc-400">Notes, progress, and learnings.</p>

        <div className="mt-8 space-y-4">
          {blogPosts.map((p) => (
            <div
              key={p.slug}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/25 p-6"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-lg font-semibold">{p.title}</div>
                  <div className="mt-2 text-sm text-zinc-400">{p.excerpt}</div>
                </div>
                <div className="shrink-0 text-sm font-medium text-zinc-300">
                  {p.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}