import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    quote: "I didn't realize how dehydrated I was until HydraSmart showed me the data. Now I feel genuinely better every single day.",
    author: "Selwyn Nobleza",
    role: "College Student",
    avatar: "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/488494436_122202103964173645_417545467848600273_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=53a332&_nc_ohc=Ogk0bIeXskIQ7kNvwGsB8Ie&_nc_oc=Adp9pH0oBLZQLGqmh4t3hNvZtrR_nyjY8x4dixB9qLxpJbYG7YniXRHaJGX3KfPo0_Co2TDmVRGgab4GYEZ0WfUa&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=FtLZAarmiYkP9AytfV21lA&_nc_ss=7a3a8&oh=00_Af21NLm0nRCVj8zL1JLK_A458btn_lGXi7H2TrLvVZpgWw&oe=69D932FB",
    rating: 5,
  },
  {
    quote: "The gentle glow reminders changed everything. I went from 3 glasses a day to hitting my full target consistently.",
    author: "Vincent Solana",
    role: "AI Prompt Specialist",
    avatar: "https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwY2FzdWFsfGVufDF8fHx8MTc3NTQ0MzgzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
  },
  {
    quote: "Perfect gym companion. It tracks everything without fuss and the app insights help me optimize my workout hydration.",
    author: "Leigh Carcallas",
    role: "Makeup Artist",
    avatar: "https://images.unsplash.com/photo-1759873821395-c29de82a5b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0JTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc3NTQ0MzgzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 bg-gray-50/70 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 mb-5" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
            TESTIMONIALS
          </span>
          <h2 className="tracking-tight text-gray-900 mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
            Loved by <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">thousands</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Join 10,000+ people who transformed their hydration habits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200/80 hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-500 group"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-7">
                <Quote className="w-8 h-8 text-blue-100 group-hover:text-blue-200 transition-colors" />
              </div>

              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 mb-8" style={{ fontSize: 15, lineHeight: 1.8 }}>
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
                <ImageWithFallback
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
                />
                <div>
                  <div className="text-gray-900" style={{ fontSize: 14, fontWeight: 700 }}>{t.author}</div>
                  <div className="text-gray-400" style={{ fontSize: 12, fontWeight: 500 }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
