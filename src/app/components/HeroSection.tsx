import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Zap, Droplets, TrendingUp } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1700225195207-14b1f002036b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGVyJTIwYm90dGxlJTIwcHJvZHVjdCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NTQ0MzIxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const stats = [
  { icon: Droplets, value: "2.4L", label: "Avg. Daily Intake" },
  { icon: Zap, value: "98%", label: "User Satisfaction" },
  { icon: TrendingUp, value: "3x", label: "Better Hydration" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1623772892441-15ee6fde6f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHNwbGFzaCUyMGRhcmslMjBiYWNrZ3JvdW5kJTIwZHJhbWF0aWN8ZW58MXx8fHwxNzc1NDQzNjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35) contrast(1.3) saturate(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-gray-950/30" />
        {/* Subtle blue accent glow */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left — Copy */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-blue-300 backdrop-blur-sm mb-8" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              SMART HYDRATION TECHNOLOGY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="tracking-tight text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em" }}
          >
            Stay hydrated.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Stay sharp.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-400 mb-10 max-w-lg"
            style={{ fontSize: 17, lineHeight: 1.8 }}
          >
            HydraSmart tracks your daily water intake and reminds you when it's time to drink — so you never fall behind on your hydration goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30"
              style={{ fontSize: 15, fontWeight: 600 }}
            >
              Buy Now — ₱2,499
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 text-white/80 rounded-full border border-white/15 hover:bg-white/10 hover:border-white/25 transition-all backdrop-blur-sm"
              style={{ fontSize: 15, fontWeight: 500 }}
            >
              See How It Works
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-8"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <s.icon className="w-[18px] h-[18px] text-blue-400" />
                </div>
                <div>
                  <div className="text-white" style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>{s.value}</div>
                  <div className="text-gray-500" style={{ fontSize: 11, fontWeight: 500 }}>{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Product */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Glow rings */}
          <div className="absolute w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute w-60 h-60 rounded-full border border-blue-400/10 animate-pulse-ring" />

          <div className="relative animate-float-slow">
            <ImageWithFallback
              src={heroImg}
              alt="HydraSmart Bottle"
              className="relative z-10 w-full max-w-[340px] rounded-3xl object-cover aspect-square shadow-2xl shadow-black/50 ring-1 ring-white/10"
            />

            {/* Floating card — Daily Goal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 -right-4 md:-right-8 z-20 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl shadow-black/10 border border-white/50"
            >
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-gray-400" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.03em" }}>DAILY GOAL</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent" style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>2.4L</div>
              <div className="w-36 h-2 bg-gray-100 rounded-full mt-2.5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ delay: 1.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="text-gray-400 mt-1.5" style={{ fontSize: 11, fontWeight: 500 }}>75% completed today</div>
            </motion.div>

            {/* Floating card — Streak */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-4 -left-4 md:-left-8 z-20 bg-white/95 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-2xl shadow-black/10 border border-white/50"
            >
              <div className="text-gray-400 mb-1" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.03em" }}>🔥 STREAK</div>
              <div className="text-gray-900" style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em" }}>14 days</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
