import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import type { CartItem, Promo } from "../types";
import Header from "../components/Header";
import { mockCartData } from "../data/mockData";
import CartEmpty from "../components/CartEmpty";
import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartData);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<Promo | null>(null);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }

        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setAppliedPromo({ code: "SAVE10", discount: 0.1 });
    } else if (promoCode.toUpperCase() === "WELCOME20") {
      setAppliedPromo({ code: "WELCOME20", discount: 0.2 });
    } else {
      alert("Invalid promo code");
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <div className="mt-8 mb-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-text-primary mb-4">
          Shopping Cart
        </h1>

        {cartItems.length === 0 && <CartEmpty />}

        <div className="grid lg:grid-cols-3 gap-6">
          <CartItems
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />

          <CartSummary
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            appliedPromo={appliedPromo}
            applyPromoCode={applyPromoCode}
            subtotal={subtotal}
          />
        </div>
      </main>
    </>
  );
};

export default CartScreen;
