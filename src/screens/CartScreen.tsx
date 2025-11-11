import { useState } from "react";
import { Link } from "react-router-dom";

import type { CartItem, Promo } from "../types";
import Header from "../components/Header";
import { mockCartData } from "../data/mockData";
import {
  ArrowLeft,
  ChevronRight,
  Minus,
  Plus,
  Shield,
  ShoppingCart,
  Tag,
  Trash2,
  Truck,
} from "lucide-react";

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
  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = (subtotal - discount) * 0.125;
  const total = subtotal - discount + shipping + tax;

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

        {cartItems.length === 0 && (
          <div className="bg-surface-900/80 backdrop-blur-xl border border-surface-700/50 rounded-2xl p-12 text-center">
            <ShoppingCart className="w-16 h-16 text-text-tertiary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Your cart is empty
            </h3>
            <p className="text-text-secondary mb-6">
              Add some products to get started
            </p>
            <Link
              to="/"
              className="bg-linear-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-accent-700 transition"
            >
              Start Shopping
            </Link>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length > 0 &&
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface-900/80 backdrop-blur-xl border border-surface-700/50 rounded-2xl p-6 hover:border-primary-600/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="shrink-0 w-32 h-32 bg-white rounded-xl p-4 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="text-xs text-secondary-400 font-medium uppercase tracking-wide">
                            {item.category}
                          </span>
                          <h3 className="text-text-primary font-semibold mt-1 line-clamp-2">
                            {item.title}
                          </h3>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-text-tertiary hover:text-error-500 transition p-2 hover:bg-surface-800/50 rounded-lg"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <p className="hidden md:line-clamp-2 text-text-tertiary text-sm mb-4">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center bg-surface-800/50 hover:bg-surface-700 text-text-secondary rounded-lg transition"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-text-primary font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center bg-surface-800/50 hover:bg-surface-700 text-text-secondary rounded-lg transition"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-2xl font-bold text-text-primary">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-text-tertiary text-sm">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-surface-900/80 backdrop-blur-xl border border-surface-700/50 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-text-primary mb-6">
                Order Summary
              </h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-text-secondary text-sm font-medium mb-2">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <div className="relative grow">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="w-full bg-surface-800/50 text-text-primary pl-10 pr-4 py-2.5 rounded-xl border border-surface-700/50 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20 transition"
                    />
                  </div>
                  <button
                    onClick={applyPromoCode}
                    className="px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition"
                  >
                    Apply
                  </button>
                </div>
                {appliedPromo && (
                  <div className="mt-2 flex items-center gap-2 text-success-400 text-sm">
                    <Tag className="w-4 h-4" />
                    <span>Code "{appliedPromo.code}" applied!</span>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-surface-700/50">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-success-400">
                    <span>Discount ({appliedPromo.discount * 100}%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-text-secondary">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-text-primary">
                  Total
                </span>
                <span className="text-2xl font-bold text-text-primary">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-linear-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2 mb-4">
                <span>Proceed to Checkout</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Benefits */}
              <div className="space-y-3 pt-4 border-t border-surface-700/50">
                <div className="flex items-center gap-3 text-text-secondary text-sm">
                  <div className="w-8 h-8 bg-success-600/20 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4 text-success-400" />
                  </div>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary text-sm">
                  <div className="w-8 h-8 bg-secondary-600/20 rounded-lg flex items-center justify-center shrink-0">
                    <Truck className="w-4 h-4 text-secondary-400" />
                  </div>
                  <span>Free shipping over $100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CartScreen;
