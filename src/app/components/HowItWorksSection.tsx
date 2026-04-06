import { motion } from "motion/react";
import { GlassWater, Waves, BellRing, BarChart3 } from "lucide-react";

const steps = [
  { icon: GlassWater, num: "01", title: "Fill your bottle", desc: "Start your day by filling HydraSmart to set your daily hydration goal." },
  { icon: Waves, num: "02", title: "Track automatically", desc: "Precision sensors detect every sip and log it instantly — zero effort." },
  { icon: BellRing, num: "03", title: "Get reminders", desc: "The LED ring glows softly when you haven't hydrated in a while." },
  { icon: BarChart3, num: "04", title: "Sync & analyze", desc: "View trends, streaks, and insights in the companion app." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 bg-gray-50/70 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 mb-5" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
            HOW IT WORKS
          </span>
          <h2 className="tracking-tight text-gray-900 mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
            Simple as it gets
          </h2>
          <p className="text-gray-400 max-w-md mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
            No complicated setup. Just fill, drink, and let HydraSmart handle the rest.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative inline-flex mb-6">
                <div className="w-24 h-24 rounded-3xl bg-white shadow-lg shadow-gray-100/50 border border-gray-100 flex items-center justify-center">
                  <s.icon className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20" style={{ fontSize: 11, fontWeight: 800, color: "white" }}>
                  {s.num.replace("0", "")}
                </div>
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }}>{s.title}</h3>
              <p className="text-gray-400 max-w-[220px] mx-auto" style={{ fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
