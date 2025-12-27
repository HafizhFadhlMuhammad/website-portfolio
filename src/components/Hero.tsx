"use client";

import { Download, Mail, Linkedin, Github, Instagram } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const roles = useMemo(
    () => ["ML Engineer", "Data Science", "AI Engineer", "Data Analyst"],
    []
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];

    const typingSpeed = isDeleting ? 35 : 60;
    const pauseAfterTyped = 1100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = fullText.slice(0, typed.length + 1);
        setTyped(next);

        if (next === fullText) {
          setTimeout(() => setIsDeleting(true), pauseAfterTyped);
        }
      } else {
        const next = fullText.slice(0, typed.length - 1);
        setTyped(next);

        if (next === "") {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typed, isDeleting, roleIndex, roles]);

  return (
    <section className="pt-20 pb-10">
      <div className="flex flex-col items-center text-center">
        {/* Foto + identitas kecil */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-zinc-800 bg-zinc-900">
              <Image
                src="/profile.jpg"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="text-left">
              {/* GANTI ini biar nama nggak dobel (pilih salah satu): */}
              <div className="text-base font-semibold text-zinc-100">
                Informatics Engineering Student
              </div>

              <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
                <span className="text-base leading-none">🇮🇩</span>
                <span>Based in Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* H1 utama */}
        <h1 className="mt-1 text-5xl font-semibold tracking-tight sm:text-6xl">
          Hafizh Fadhl Muhammad
          <br />

          {/* FIX: area role dibuat tinggi tetap supaya paragraf bawah nggak naik turun */}
          <span className="mt-3 inline-flex h-[1.2em] min-w-[18ch] items-center justify-center align-middle leading-none">
            {typed}
            <span className="ml-1 inline-block h-[1.05em] w-[2px] bg-zinc-200/80 animate-pulse" />
          </span>
        </h1>

        {/* Paragraf sekarang harusnya diem */}
        <p className="mt-6 max-w-2xl text-zinc-400">
          I engineer the backbone of intelligent systems. From data analysis to applied ML & AI, I build clean backends and scalable APIs to deliver reliable, data-driven features.
        </p>

        {/* Sosial */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="https://linkedin.com/in/hafizhfadhlm"
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-zinc-800 bg-zinc-950/40 text-zinc-300 hover:bg-zinc-900 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://instagram.com/hafizhfadhlm"
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-zinc-800 bg-zinc-950/40 text-zinc-300 hover:bg-zinc-900 hover:text-white transition"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://github.com/HafizhFadhlMuhammad"
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-zinc-800 bg-zinc-950/40 text-zinc-300 hover:bg-zinc-900 hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:hafizhfadhl22@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-zinc-800 bg-zinc-950/40 text-zinc-300 hover:bg-zinc-900 hover:text-white transition"
            aria-label="GitHub"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-4 py-2 font-medium text-zinc-900 hover:bg-zinc-200 transition"
          >
            <Download size={18} />
            Download My Resume
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-4 py-2 text-zinc-100 hover:bg-zinc-900 transition"
          >
            <Mail size={18} />
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}