import { SiUnity } from "react-icons/si";

export default function CurrentlyLearning() {
  return (
    <section>
      {/* Judul di luar box (selaras dengan Tech Stack) */}
      <h2 className="text-3xl font-semibold tracking-tight">Currently Learning</h2>

      <div className="mt-4 rounded-3xl border border-zinc-800 bg-zinc-900/25 p-5">
        {/* Tinggi disamain dengan Tech Stack box */}
        <div className="flex h-[150px] flex-col items-center justify-center gap-3">
          <SiUnity className="text-[110px] text-zinc-200" />

          <p className="text-sm text-zinc-400">
            Exploring Unity for interactive projects.
          </p>
        </div>
      </div>
    </section>
  );
}