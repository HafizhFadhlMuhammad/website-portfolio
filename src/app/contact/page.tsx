export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      <main className="min-h-screen">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h1 className="text-4xl font-semibold text-center">Contact Me</h1>

          <p className="mt-3 text-center text-zinc-400">
            Feel free to fill out the form below to get in touch or just say hello at{" "}
            <a
              className="underline text-zinc-200"
              href="mailto:hafizhfadhl22@gmail.com"
            >
              hafizhfadhl22@gmail.com
            </a>
          </p>

          <form className="mt-10 space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-zinc-600"
            />

            <textarea
              placeholder="Enter your message"
              rows={8}
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-zinc-600"
            />

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-4 py-2 font-medium text-zinc-900 hover:bg-zinc-200"
            >
              Submit ↗
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}