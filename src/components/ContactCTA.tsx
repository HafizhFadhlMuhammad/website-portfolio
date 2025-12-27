import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="mt-24">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 px-8 py-12 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          Contact Me
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Feel free to reach out if you want to collaborate, discuss projects,
          or just say hello.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-3 font-medium text-zinc-900 hover:bg-zinc-200 transition"
          >
            Go to Contact Page
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}