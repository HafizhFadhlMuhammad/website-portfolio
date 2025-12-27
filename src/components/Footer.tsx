import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-zinc-400">
        {/* Left */}
        <div>
          © {new Date().getFullYear()} hafizhfadhlmuhammad ·{" "}
          <Link
            href="/privacy"
            className="hover:text-zinc-200 transition"
          >
            privacy policy
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/USERNAME"
            target="_blank"
            className="hover:text-zinc-200 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/USERNAME"
            target="_blank"
            className="hover:text-zinc-200 transition"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-zinc-200 transition"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}