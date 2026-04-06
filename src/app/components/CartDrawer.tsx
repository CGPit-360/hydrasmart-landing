import { X, Trash2, Droplets, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface CartItem {
  id: string;
  color: string;
  qty: number;
  price: number;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, qty: number) => void;
}

export function CartDrawer({ open, onClose, items, onRemove, onUpdateQty }: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty * (item.qty >= 2 ? 0.9 : 1), 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-gray-900" />
                <h2 className="text-gray-900" style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }}>Your Cart</h2>
                {items.length > 0 && (
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full" style={{ fontSize: 11, fontWeight: 700 }}>
                    {items.reduce((s, i) => s + i.qty, 0)}
                  </span>
                )}
              </div>
              <button onClick={onClose} className="p-2 rounded-xl hover:bg-gray-50 transition-colors">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-300">
                  <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mb-4">
                    <Droplets className="w-8 h-8" />
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>Your cart is empty</span>
                  <span className="text-gray-300 mt-1" style={{ fontSize: 13 }}>Add a HydraSmart to get started</span>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      className="flex items-center gap-4 p-5 bg-gray-50/80 rounded-2xl border border-gray-100"
                    >
                      <div className="flex-1">
                        <div className="text-gray-900" style={{ fontSize: 14, fontWeight: 700 }}>HydraSmart — {item.color}</div>
                        <div className="text-gray-400 mt-0.5" style={{ fontSize: 12, fontWeight: 500 }}>
                          ₱{item.price.toLocaleString()} each{item.qty >= 2 && " · 10% off"}
                        </div>
                        <div className="flex items-center gap-1.5 mt-3">
                          <button
                            onClick={() => onUpdateQty(item.id, Math.max(1, item.qty - 1))}
                            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-white transition-colors"
                            style={{ fontSize: 14 }}
                          >
                            −
                          </button>
                          <span className="w-8 text-center" style={{ fontSize: 13, fontWeight: 700 }}>{item.qty}</span>
                          <button
                            onClick={() => onUpdateQty(item.id, item.qty + 1)}
                            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-white transition-colors"
                            style={{ fontSize: 14 }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end gap-2">
                        <div className="text-gray-900" style={{ fontSize: 15, fontWeight: 700 }}>
                          ₱{(item.price * item.qty * (item.qty >= 2 ? 0.9 : 1)).toLocaleString()}
                        </div>
                        <button onClick={() => onRemove(item.id)} className="p-1.5 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-50 transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <div className="flex justify-between mb-5">
                  <span className="text-gray-500" style={{ fontSize: 14, fontWeight: 500 }}>Subtotal</span>
                  <span className="text-gray-900" style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>₱{subtotal.toLocaleString()}</span>
                </div>
                <button
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                  style={{ fontSize: 15, fontWeight: 700 }}
                >
                  Checkout
                </button>
                <p className="text-gray-400 text-center mt-3" style={{ fontSize: 12, fontWeight: 500 }}>Free shipping on orders over ₱3,000</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
