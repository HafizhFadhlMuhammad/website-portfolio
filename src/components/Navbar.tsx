"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const activeIndex = nav.findIndex((n) =>
    n.href === "/" ? pathname === "/" : pathname.startsWith(n.href)
  );

  // fallback kalau ga ketemu
  const idx = activeIndex === -1 ? 0 : activeIndex;

  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto flex max-w-6xl justify-center px-6">
        <nav className="relative rounded-full border border-zinc-800 bg-zinc-950/70 p-2 backdrop-blur shadow-lg">
          {/* slider / indicator */}
          <span
            className="absolute top-1 bottom-1 rounded-full bg-zinc-900 shadow transition-transform duration-300 ease-out"
            style={{
              width: `calc((100% - 0.5rem) / ${nav.length})`,
              transform: `translateX(calc(${idx} * 100%))`,
              left: "0.25rem",
            }}
          />

          <ul className="relative flex items-center">
            {nav.map((n) => {
              const isActive =
                n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);

              return (
                <li key={n.href} className="w-24 sm:w-28">
                  <Link
                    href={n.href}
                    className={[
                      "relative z-10 inline-flex w-full items-center justify-center rounded-full px-6 py-2",
                      "text-lg font-semibold tracking-tight transition-colors duration-300",
                      isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200",
                    ].join(" ")}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}