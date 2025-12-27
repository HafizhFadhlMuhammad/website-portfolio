"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { IOptions, RecursivePartial } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: {
        color: { value: "transparent" },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: ["repulse"],
          },
          onClick: {
            enable: true,
            mode: ["push"],
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          repulse: {
            distance: 120,
            duration: 0.4,
          },
          push: {
            quantity: 3,
          },
        },
      },

      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            area: 900,
          },
        },
        color: {
          value: "#a1a1aa", // zinc-400
        },
        links: {
          enable: true,
          color: "#3f3f46", // zinc-700
          distance: 140,
          opacity: 0.35,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          outModes: {
            default: "out",
          },
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Particles className="h-full w-full" options={options} />
      {/* overlay biar lebih soft & elegan */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/70 to-zinc-950" />
    </div>
  );
}