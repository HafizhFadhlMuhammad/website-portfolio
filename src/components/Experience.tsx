"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { experience, type ExperienceItem } from "@/src/data/experience";
import { ArrowUpRight } from "lucide-react";

type TabType = "work" | "education" | "organization" | "award";

const MONTH_MAP: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function parseStartDate(period: string): number {
  // supports:
  // "Feb 2025 — Dec 2025"
  // "Aug 2023 — Aug 2027 (Expected)"
  // "2024 — Present"
  // "May 2025"
  const clean = period.replace("(Expected)", "").trim();
  const start = clean.split("—")[0].trim();
  const parts = start.split(" ").filter(Boolean);

  let year = 0;
  let month = 0;

  if (parts.length >= 2) {
    month = MONTH_MAP[parts[0]] ?? 0;
    year = Number(parts[1]);
  } else {
    year = Number(parts[0]);
    month = 0;
  }

  return new Date(year, month).getTime();
}

function Logo({ text, src }: { text?: string; src?: string }) {
  if (src) {
    return (
      <div className="relative h-12 w-12 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950/60">
        <Image
          src={src}
          alt={text ?? "Logo"}
          fill
          className="object-contain p-2"
        />
      </div>
    );
  }

  return (
    <div className="grid h-12 w-12 place-items-center rounded-full border border-zinc-800 bg-zinc-950/60 text-[10px] font-semibold text-zinc-200">
      {text ?? "LOGO"}
    </div>
  );
}

function MetaLine({ item }: { item: ExperienceItem }) {
  // baris tengah: org + optional location
  const parts = [item.org];
  if (item.location) parts.push(item.location);
  return (
    <div className="mt-1 text-sm text-zinc-300">
      {parts.join(" · ")}
    </div>
  );
}

function ItemCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/40 p-6">
      {/* 1) ROLE dulu (seperti contoh) */}
      <div className="text-lg font-semibold text-zinc-100">
        {item.role}
      </div>

      {/* 2) ORG + location */}
      <MetaLine item={item} />

      {/* 3) PERIOD paling bawah, small & muted */}
      <div className="mt-1 text-sm text-zinc-500">{item.period}</div>

      {/* Bullets */}
      <ul className="mt-4 space-y-2 text-sm text-zinc-400">
        {item.bullets.map((b, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience({ linkedinUrl }: { linkedinUrl: string }) {
  const [tab, setTab] = useState<TabType>("work");

  const tabs: { key: TabType; label: string }[] = [
    { key: "work", label: "Work" },
    { key: "education", label: "Education" },
    { key: "organization", label: "Organization" },
    { key: "award", label: "Award" },
  ];

  const tabIndex = tabs.findIndex((t) => t.key === tab);

  const items = useMemo(() => {
    return experience
      .filter((e) => e.type === tab)
      .sort((a, b) => parseStartDate(b.period) - parseStartDate(a.period));
  }, [tab]);

  return (
    <section id="experience" className="mt-20">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition"
        >
          More <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Tabs (ambil warna dari Navbar) */}
      <div className="mt-6">
        <nav className="relative rounded-full border border-zinc-800 bg-zinc-950/70 p-2 backdrop-blur shadow-lg">
          <span
            className="absolute top-1 bottom-1 rounded-full bg-zinc-900 shadow transition-transform duration-300 ease-out"
            style={{
              width: `calc((100% - 0.5rem) / 4)`,
              transform: `translateX(calc(${tabIndex} * 100%))`,
              left: "0.25rem",
            }}
          />
          <ul className="relative flex items-center gap-1">
            {tabs.map((t) => {
              const isActive = tab === t.key;
              return (
                <li key={t.key} className="flex-1">
                  <button
                    type="button"
                    onClick={() => setTab(t.key)}
                    className={[
                      "relative z-10 inline-flex w-full items-center justify-center rounded-full px-4 py-2",
                      "text-base font-semibold tracking-tight transition-colors duration-300",
                      "cursor-pointer select-none",
                      isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200",
                    ].join(" ")}
                  >
                    {t.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Timeline */}
      <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6">
        <div key={tab} className="animate-fade-in">
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-px bg-zinc-800" />

            <div className="space-y-8">
              {items.length === 0 ? (
                <div className="pl-16 text-sm text-zinc-400">
                  No items yet for{" "}
                  <span className="text-zinc-200">
                    {tabs[tabIndex]?.label}
                  </span>
                  .
                </div>
              ) : (
                items.map((item, idx) => (
                  <div key={idx} className="relative pl-16">
                    <div className="absolute left-0 top-4">
                      {/* NOTE: butuh field item.logo di data kalau mau gambar */}
                      <Logo text={item.logoText} src={(item as any).logo} />
                    </div>
                    <ItemCard item={item} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}