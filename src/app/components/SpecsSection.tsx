import { motion } from "motion/react";
import { Ruler, Layers, BatteryFull, Usb, Palette, Weight } from "lucide-react";

const specs = [
  { icon: Ruler, label: "Capacity", value: "750ml / 25oz" },
  { icon: Layers, label: "Material", value: "Medical-grade Stainless Steel, BPA-free" },
  { icon: BatteryFull, label: "Battery Life", value: "Up to 7 days" },
  { icon: Usb, label: "Charging", value: "USB-C (cable included)" },
  { icon: Palette, label: "Colors", value: "Midnight Black, Arctic White, Ocean Blue" },
  { icon: Weight, label: "Weight", value: "320g / 11.3oz" },
];

export function SpecsSection() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gray-50 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 mb-5" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
            SPECIFICATIONS
          </span>
          <h2 className="tracking-tight text-gray-900 mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
            Built with precision
          </h2>
          <p className="text-gray-400 max-w-md mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Every detail engineered for the best hydration experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50/70 rounded-3xl border border-gray-100 p-2"
        >
          {specs.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-4 py-5 px-6 ${i < specs.length - 1 ? "border-b border-gray-100/80" : ""} hover:bg-white rounded-2xl transition-colors`}
            >
              <div className="w-9 h-9 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                <s.icon className="w-4 h-4 text-blue-500" strokeWidth={1.5} />
              </div>
              <span className="text-gray-400 flex-1" style={{ fontSize: 14, fontWeight: 500 }}>{s.label}</span>
              <span className="text-gray-900 text-right" style={{ fontSize: 14, fontWeight: 600 }}>{s.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
