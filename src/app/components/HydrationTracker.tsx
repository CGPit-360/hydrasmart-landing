import { useState } from "react";
import { motion } from "motion/react";
import { Droplets, Zap } from "lucide-react";

const stats = [
  { label: "Energy Level", emoji: "⚡", before: 30, after: 85 },
  { label: "Focus", emoji: "🎯", before: 40, after: 90 },
  { label: "Mood", emoji: "😊", before: 35, after: 80 },
];

export function HydrationTracker() {
  const [hydrated, setHydrated] = useState(false);
  const r = 40;
  const circ = 2 * Math.PI * r;

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/40 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 mb-5" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
            BEFORE &amp; AFTER
          </span>
          <h2 className="tracking-tight text-gray-900 mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
            See the <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">difference</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Toggle to see how proper hydration transforms your daily performance.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-14">
          <button
            onClick={() => setHydrated(!hydrated)}
            className="relative h-14 rounded-full transition-all duration-500 px-2 flex items-center"
            style={{ width: 260, backgroundColor: hydrated ? "#3b82f6" : "#e5e7eb" }}
          >
            <motion.div
              className="absolute w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
              animate={{ left: hydrated ? "calc(100% - 48px)" : "8px" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {hydrated ? <Droplets className="w-4 h-4 text-blue-500" /> : <Zap className="w-4 h-4 text-gray-400" />}
            </motion.div>
            <span
              className={`absolute inset-0 flex items-center transition-all duration-300 ${hydrated ? "justify-start pl-7 text-white/90" : "justify-end pr-7 text-gray-500"}`}
              style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.02em" }}
            >
              {hydrated ? "HYDRATED" : "DEHYDRATED"}
            </span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => {
            const val = hydrated ? stat.after : stat.before;
            return (
              <motion.div
                key={stat.label}
                className="rounded-3xl p-8 text-center border transition-all duration-500"
                animate={{
                  backgroundColor: hydrated ? "rgb(239 246 255)" : "rgb(250 250 250)",
                  borderColor: hydrated ? "rgb(191 219 254)" : "rgb(243 244 246)",
                }}
              >
                <div className="mb-1" style={{ fontSize: 20 }}>{stat.emoji}</div>
                <div className="text-gray-500 mb-4" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.05em" }}>{stat.label.toUpperCase()}</div>
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
                    <circle cx="48" cy="48" r={r} fill="none" stroke={hydrated ? "#dbeafe" : "#f3f4f6"} strokeWidth="5" />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r={r}
                      fill="none"
                      stroke={hydrated ? "url(#blueGrad)" : "#d1d5db"}
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray={circ}
                      animate={{ strokeDashoffset: circ * (1 - val / 100) }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <defs>
                      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em" }}
                    animate={{ color: hydrated ? "#3b82f6" : "#9ca3af" }}
                  >
                    {val}%
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
