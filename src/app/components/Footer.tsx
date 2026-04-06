import { Droplets } from "lucide-react";

const links = {
  Product: ["Features", "How It Works", "Pricing", "Specs"],
  Company: ["About", "Careers", "Press", "Blog"],
  Support: ["Help Center", "Contact", "Warranty", "Returns"],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <Droplets className="w-6 h-6 text-blue-400" />
              <span className="text-white" style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em" }}>HydraSmart</span>
            </div>
            <p className="text-gray-500 max-w-xs mb-6" style={{ fontSize: 14, lineHeight: 1.7 }}>
              The smart water bottle that helps you build better hydration habits, one sip at a time.
            </p>
            <div className="flex gap-3">
              {["X", "IG", "TT"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all" style={{ fontSize: 11, fontWeight: 700 }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white mb-5" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.04em" }}>{title.toUpperCase()}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors" style={{ fontSize: 14 }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-gray-600" style={{ fontSize: 12 }}>
            &copy; 2026 HydraSmart Inc. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors" style={{ fontSize: 12 }}>Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors" style={{ fontSize: 12 }}>Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors" style={{ fontSize: 12 }}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
