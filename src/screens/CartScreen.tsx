import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import type { Promo } from "../types";
import Header from "../components/Header";
import CartEmpty from "../components/CartEmpty";
import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";
import { useCart } from "../hooks/useCart";

const CartScreen = () => {
  const { cartItems } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<Promo | null>(null);

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setAppliedPromo({ code: "SAVE10", discount: 0.1 });
    } else if (promoCode.toUpperCase() === "WELCOME20") {
      setAppliedPromo({ code: "WELCOME20", discount: 0.2 });
    } else {
      alert("Invalid promo code");
    }
  };

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
          <CartItems />

          <CartSummary
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            appliedPromo={appliedPromo}
            applyPromoCode={applyPromoCode}
          />
        </div>
      </main>
    </>
  );
};

export default CartScreen;
