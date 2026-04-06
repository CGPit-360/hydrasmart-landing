import { motion } from "motion/react";
import { Activity, Sun, Thermometer, BatteryFull, Smartphone, Shield } from "lucide-react";

const features = [
  { icon: Activity, title: "Smart Hydration Tracking", desc: "Advanced sensors automatically measure every sip, giving you precise hydration data throughout your day.", gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
  { icon: Sun, title: "Glow Reminder System", desc: "A subtle LED ring pulses gently to remind you when it's time to hydrate — no notifications needed.", gradient: "from-amber-500 to-orange-500", bg: "bg-amber-50" },
  { icon: Thermometer, title: "Temperature Display", desc: "OLED micro-screen shows real-time drink temperature, so you always know what you're sipping.", gradient: "from-emerald-500 to-teal-500", bg: "bg-emerald-50" },
  { icon: BatteryFull, title: "7-Day Battery Life", desc: "Ultra-efficient power system means you charge once a week. Just focus on drinking.", gradient: "from-purple-500 to-violet-500", bg: "bg-purple-50" },
  { icon: Smartphone, title: "Companion App", desc: "Beautifully designed app with insights, history, and personalized hydration plans synced in real-time.", gradient: "from-pink-500 to-rose-500", bg: "bg-pink-50" },
  { icon: Shield, title: "Premium Materials", desc: "Medical-grade stainless steel, BPA-free lid, and double-wall vacuum insulation for all-day freshness.", gradient: "from-gray-600 to-gray-800", bg: "bg-gray-50" },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 mb-5" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
            FEATURES
          </span>
          <h2 className="tracking-tight text-gray-900 mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">stay on track</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Engineered with precision. Designed with care. Every feature serves a purpose.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 rounded-2xl bg-white border border-gray-100 hover:border-gray-200/80 hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-500"
            >
              <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                <f.icon className={`w-5 h-5 bg-gradient-to-br ${f.gradient} bg-clip-text`} style={{ color: undefined }} strokeWidth={2} />
              </div>
              <h3 className="text-gray-900 mb-2.5" style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>{f.title}</h3>
              <p className="text-gray-400" style={{ fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
