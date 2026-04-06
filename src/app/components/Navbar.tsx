import { useState, useEffect } from "react";
import { Droplets, ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Features", "How It Works", "Testimonials", "Pricing"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-gray-100/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Droplets className={`w-7 h-7 transition-colors duration-300 ${scrolled ? "text-blue-500" : "text-blue-400"}`} />
          </div>
          <span className={`tracking-tight transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`} style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em" }}>
            HydraSmart
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              style={{ fontSize: 13, fontWeight: 500 }}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className={`hidden md:inline-flex px-5 py-2 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-white/15 text-white border border-white/20 hover:bg-white/25 backdrop-blur-sm"
            }`}
            style={{ fontSize: 13, fontWeight: 600 }}
          >
            Buy Now
          </a>
          <button
            onClick={onCartClick}
            className={`relative p-2.5 rounded-full transition-all duration-300 ${
              scrolled ? "hover:bg-gray-100 text-gray-700" : "hover:bg-white/10 text-white"
            }`}
          >
            <ShoppingCart className="w-[18px] h-[18px]" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-0.5 -right-0.5 bg-blue-500 text-white w-[18px] h-[18px] rounded-full flex items-center justify-center"
                  style={{ fontSize: 10, fontWeight: 700 }}
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button
            className={`md:hidden p-2.5 rounded-full transition-colors ${scrolled ? "hover:bg-gray-100" : "hover:bg-white/10 text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-600 hover:text-gray-900 py-3 px-3 rounded-xl hover:bg-gray-50 transition-colors"
                  style={{ fontSize: 15, fontWeight: 500 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="#pricing" className="mt-2 py-3 bg-gray-900 text-white rounded-full text-center" style={{ fontSize: 14, fontWeight: 600 }} onClick={() => setMobileOpen(false)}>
                Buy Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
