import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, hasFirebaseConfig } from "./firebase";

export interface OrderItem {
  id: string;
  color: string;
  qty: number;
  price: number;
}

function getLineTotal(item: OrderItem): number {
  const discountMultiplier = item.qty >= 2 ? 0.9 : 1;
  return item.price * item.qty * discountMultiplier;
}

export async function createOrder(items: OrderItem[]): Promise<string> {
  if (!hasFirebaseConfig || !db) {
    throw new Error("Firebase is not configured");
  }

  if (items.length === 0) {
    throw new Error("Cart is empty");
  }

  const subtotal = items.reduce((sum, item) => sum + getLineTotal(item), 0);
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  const orderRef = await addDoc(collection(db, "orders"), {
    items: items.map((item) => ({
      id: item.id,
      color: item.color,
      qty: item.qty,
      unitPrice: item.price,
      lineTotal: getLineTotal(item),
    })),
    totalItems,
    subtotal,
    currency: "PHP",
    status: "pending",
    createdAt: serverTimestamp(),
  });

  return orderRef.id;
}
