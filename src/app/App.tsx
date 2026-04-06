import { useState, useCallback } from "react";
import { Toaster, toast } from "sonner";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { LifestyleSection } from "./components/LifestyleSection";
import { HydrationTracker } from "./components/HydrationTracker";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { SpecsSection } from "./components/SpecsSection";
import { PricingSection } from "./components/PricingSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { CartDrawer, CartItem } from "./components/CartDrawer";

const FONT = "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = useCallback((color: string, qty: number) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.color === color);
      if (existing) {
        return prev.map((i) => (i.color === color ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { id: crypto.randomUUID(), color, qty, price: 2499 }];
    });
    setCartOpen(true);
    toast.success("Added to cart!");
  }, []);

  const handleRemove = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const handleUpdateQty = useCallback((id: string, qty: number) => {
    setCartItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  }, []);

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: FONT }}>
      <Toaster position="top-center" richColors />
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <LifestyleSection />
      <HydrationTracker />
      <TestimonialsSection />
      <SpecsSection />
      <PricingSection onAddToCart={handleAddToCart} />
      <FinalCTA />
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cartItems} onRemove={handleRemove} onUpdateQty={handleUpdateQty} />
    </div>
  );
}
