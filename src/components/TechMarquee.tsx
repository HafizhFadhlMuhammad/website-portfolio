import Image from "next/image";
import Link from "next/link";
import { TECH_STACK } from "@/src/data/techStack";

function TechChip({
  name,
  icon,
  docs,
}: {
  name: string;
  icon: string;
  docs: string;
}) {
  return (
    <a
      href={docs}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "group shrink-0",
        "flex items-center gap-3 rounded-2xl px-4 py-3",
        "border border-zinc-800 bg-zinc-950/30",
        "transition hover:bg-zinc-900/40 hover:border-zinc-700",
      ].join(" ")}
      aria-label={`Open ${name} documentation`}
      title={`${name} docs`}
    >
      <div className="relative h-7 w-7">
        <Image
          src={icon}
          alt={name}
          fill
          className={[
            "object-contain",
            "grayscale opacity-70",
            "transition duration-200",
            "group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105",
          ].join(" ")}
        />
      </div>

      <span className="whitespace-nowrap text-sm font-semibold text-zinc-200 group-hover:text-white">
        {name}
      </span>
    </a>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof TECH_STACK;
  reverse?: boolean;
}) {
  // duplikasi hanya untuk loop animasi (isi tetap sama untuk row itu)
  const loopItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-zinc-950 to-transparent" />

      <div className={["flex w-max items-center gap-4", reverse ? "marquee-right" : "marquee-left"].join(" ")}>
        {loopItems.map((t, i) => (
          <TechChip key={`${t.name}-${i}`} name={t.name} icon={t.icon} docs={t.docs} />
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  // Split: atas & bawah beda isi (tidak double)
  const mid = Math.ceil(TECH_STACK.length / 2);
  const top = TECH_STACK.slice(0, mid);
  const bottom = TECH_STACK.slice(mid);

  return (
    <section>
      {/* Judul DI LUAR box */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight">Tech Stack</h2>

        {/* opsional: more -> bisa diarahkan ke /projects atau /tech */}
        <Link
          href="/projects"
          className="text-sm text-zinc-400 hover:text-zinc-200 transition inline-flex items-center gap-2"
        >
          More <span aria-hidden>↗</span>
        </Link>
      </div>

      {/* Box diperkecil */}
      <div className="mt-4 rounded-3xl border border-zinc-800 bg-zinc-900/25 p-5">
        {/* tinggi diperkecil biar nggak “kosong” */}
        <div className="flex h-[150px] flex-col justify-center gap-4">
          <MarqueeRow items={top} />
          <MarqueeRow items={bottom} reverse />
        </div>
      </div>
    </section>
  );
}