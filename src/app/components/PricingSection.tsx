import { useState } from "react";
import { motion } from "motion/react";
import { Check, ShoppingCart, Shield, Truck, RotateCcw } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const colorOptions = [
  { name: "Black", hex: "#1a1a1a", img: "https://images.unsplash.com/photo-1683383277379-644816d886e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGVyJTIwYm90dGxlJTIwcHJvZHVjdCUyMGJsYWNrfGVufDF8fHx8MTc3NTQ0MjE5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { name: "White", hex: "#e5e5e5", img: "https://images.unsplash.com/photo-1619066045029-5c7e8537bd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGVyJTIwYm90dGxlJTIwd2hpdGUlMjBwcm9kdWN0fGVufDF8fHx8MTc3NTQ0MjE5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { name: "Blue", hex: "#3b82f6", img: "https://images.unsplash.com/photo-1670953432422-3f50ccacc50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXVzYWJsZSUyMGJvdHRsZSUyMGJsdWUlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc1NDQyMTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

const guarantees = [
  { icon: Truck, text: "Free shipping over ₱3,000" },
  { icon: RotateCcw, text: "30-day money-back guarantee" },
  { icon: Shield, text: "1-year warranty" },
];

interface PricingSectionProps {
  onAddToCart: (color: string, qty: number) => void;
}

export function PricingSection({ onAddToCart }: PricingSectionProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);
  const price = 2499;
  const discount = qty >= 2 ? 0.1 : 0;
  const total = price * qty * (1 - discount);

  return (
    <section id="pricing" className="py-28 bg-gray-50/70 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 mb-5" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
            PRICING
          </span>
          <h2 className="tracking-tight text-gray-900 mb-4" style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
            Choose your HydraSmart
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/40 overflow-hidden grid md:grid-cols-2"
        >
          {/* Image */}
          <div className="relative bg-gray-50 p-10 flex items-center justify-center min-h-[360px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
            <motion.div
              key={selectedColor}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <ImageWithFallback
                src={colorOptions[selectedColor].img}
                alt={`HydraSmart ${colorOptions[selectedColor].name}`}
                className="w-full max-w-[280px] rounded-2xl object-cover aspect-square"
              />
            </motion.div>
          </div>

          {/* Details */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="mb-1">
              <span className="inline-block px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-600 mb-3" style={{ fontSize: 11, fontWeight: 700 }}>
                IN STOCK
              </span>
            </div>
            <h3 className="text-gray-900 mb-1" style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>HydraSmart Bottle</h3>
            <p className="text-gray-400 mb-7" style={{ fontSize: 14, fontWeight: 500 }}>750ml · Smart Hydration Tracking</p>

            {/* Color */}
            <div className="mb-7">
              <span className="text-gray-500 mb-3 block" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.04em" }}>
                COLOR — {colorOptions[selectedColor].name}
              </span>
              <div className="flex gap-3">
                {colorOptions.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(i)}
                    className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColor === i ? "border-blue-500 scale-110 shadow-lg" : "border-gray-200 hover:border-gray-300"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  >
                    {selectedColor === i && <Check className="w-4 h-4 text-white drop-shadow-sm" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <span className="text-gray-500 mb-3 block" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.04em" }}>
                QUANTITY
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  style={{ fontSize: 16, fontWeight: 500 }}
                >
                  −
                </button>
                <span className="w-12 text-center" style={{ fontSize: 16, fontWeight: 700 }}>{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  style={{ fontSize: 16, fontWeight: 500 }}
                >
                  +
                </button>
              </div>
              {qty >= 2 && (
                <motion.span
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-1.5 text-emerald-600 mt-2.5 px-2.5 py-1 bg-emerald-50 rounded-lg"
                  style={{ fontSize: 12, fontWeight: 600 }}
                >
                  🎉 10% bundle discount applied!
                </motion.span>
              )}
            </div>

            {/* Price */}
            <div className="mb-7">
              <span className="text-gray-900" style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em" }}>
                ₱{total.toLocaleString()}
              </span>
              {discount > 0 && (
                <span className="text-gray-300 line-through ml-3" style={{ fontSize: 16, fontWeight: 500 }}>
                  ₱{(price * qty).toLocaleString()}
                </span>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => onAddToCart(colorOptions[selectedColor].name, qty)}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center justify-center gap-2.5 active:scale-[0.98]"
              style={{ fontSize: 15, fontWeight: 700 }}
            >
              <ShoppingCart className="w-[18px] h-[18px]" />
              Add to Cart
            </button>

            {/* Guarantees */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
              {guarantees.map((g) => (
                <span key={g.text} className="inline-flex items-center gap-1.5 text-gray-400" style={{ fontSize: 12, fontWeight: 500 }}>
                  <g.icon className="w-3.5 h-3.5" />
                  {g.text}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
