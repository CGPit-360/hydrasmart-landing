import { motion } from "motion/react";
import { ArrowRight, Droplets } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500" />
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 text-center relative"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Droplets className="w-7 h-7 text-white" />
        </div>

        <h2
          className="tracking-tight text-white mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em" }}
        >
          Upgrade your
          <br />
          hydration today.
        </h2>
        <p className="text-blue-100/80 mb-10 max-w-md mx-auto" style={{ fontSize: 17, lineHeight: 1.8 }}>
          Feel better, think clearer, and perform at your best — every single day.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2.5 px-9 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all shadow-2xl shadow-black/10"
            style={{ fontSize: 15, fontWeight: 700 }}
          >
            Order Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <span className="text-white/50" style={{ fontSize: 13, fontWeight: 500 }}>
            Starting at ₱2,499
          </span>
        </div>
      </motion.div>
    </section>
  );
}
