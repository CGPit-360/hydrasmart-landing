import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const images = [
  { src: "https://images.unsplash.com/photo-1560877307-9758caf7508c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGd5bSUyMHdvcmtvdXQlMjBoeWRyYXRpb258ZW58MXx8fHwxNzc1NDQyMTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Gym", label: "Workouts" },
  { src: "https://images.unsplash.com/photo-1611696430200-68655e605723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU0NDIxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Study", label: "Study Sessions" },
  { src: "https://images.unsplash.com/photo-1626888029765-9bb9f27d2e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwaGlraW5nJTIwbmF0dXJlJTIwd2F0ZXJ8ZW58MXx8fHwxNzc1NDQyMTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Outdoor", label: "Adventures" },
  { src: "https://images.unsplash.com/photo-1680459575544-c6cb51abdc84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBkcmlua2luZyUyMHdhdGVyJTIwYm90dGxlJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTQ0MzIwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Office", label: "At the Office" },
  { src: "https://images.unsplash.com/photo-1757688341983-875997d7ea78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwcm91dGluZSUyMGtpdGNoZW4lMjBoeWRyYXRpb258ZW58MXx8fHwxNzc1NDQzMjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Morning", label: "Morning Routine" },
  { src: "https://images.unsplash.com/photo-1661339741658-68f062cf9a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMHdhdGVyJTIwYnJlYWt8ZW58MXx8fHwxNzc1NDQzMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Yoga", label: "Yoga & Wellness" },
  { src: "https://images.unsplash.com/photo-1774793153240-e5de76dc87f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uZXIlMjBqb2dnaW5nJTIwcGFyayUyMGh5ZHJhdGlvbnxlbnwxfHx8fDE3NzU0NDMyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Running", label: "On the Go" },
];

const allImages = [...images, ...images];

export function LifestyleSection() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 mb-5" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
            LIFESTYLE
          </span>
          <h2 className="tracking-tight text-gray-900 mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
            Built for your <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">everyday life</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
            From workouts to study sessions, HydraSmart fits seamlessly into your routine.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-5 w-max">
          {allImages.map((img, i) => (
            <motion.div
              key={`${img.label}-${i}`}
              className="shrink-0"
              style={{ width: 320 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/5]">
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-white drop-shadow-lg" style={{ fontSize: 17, fontWeight: 700 }}>{img.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
