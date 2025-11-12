import { ChevronRight, Shield, Tag, Truck } from "lucide-react";

import type { Promo } from "../types";
import { useCart } from "../hooks/useCart";

interface CartSummaryProps {
  promoCode: string;
  setPromoCode: React.Dispatch<React.SetStateAction<string>>;
  appliedPromo: Promo | null;
  applyPromoCode: () => void;
}

const CartSummary = ({
  promoCode,
  setPromoCode,
  appliedPromo,
  applyPromoCode,
}: CartSummaryProps) => {
  const { totalPrice: subtotal } = useCart();

  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = (subtotal - discount) * 0.125;
  const total = subtotal - discount + shipping + tax;

  return (
    <div className="lg:col-span-1 w-full px-2 sm:px-0">
      <div className="bg-surface-900/80 backdrop-blur-xl border border-surface-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 sticky top-20 sm:top-24">
        <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-4 sm:mb-6">
          Order Summary
        </h2>

        {/* Promo Code */}
        <div className="mb-5 sm:mb-6">
          <label className="block text-text-secondary text-xs sm:text-sm font-medium mb-2">
            Promo Code
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative grow">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-text-tertiary" />
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter code"
                className="w-full bg-surface-800/50 text-text-primary pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-surface-700/50 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20 transition text-sm sm:text-base"
              />
            </div>
            <button
              onClick={applyPromoCode}
              className="px-3 sm:px-4 py-2 sm:py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg sm:rounded-xl transition text-sm sm:text-base"
            >
              Apply
            </button>
          </div>
          {appliedPromo && (
            <div className="mt-2 flex items-center gap-2 text-success-400 text-xs sm:text-sm">
              <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Code "{appliedPromo.code}" applied!</span>
            </div>
          )}
        </div>

        {/* Price Breakdown */}
        <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-surface-700/50 text-sm sm:text-base">
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
            <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between text-text-secondary">
            <span>Tax (12.5%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mb-5 sm:mb-6">
          <span className="text-base sm:text-lg font-semibold text-text-primary">
            Total
          </span>
          <span className="text-xl sm:text-2xl font-bold text-text-primary">
            ${total.toFixed(2)}
          </span>
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-linear-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold py-3 sm:py-3.5 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2 mb-4">
          <span>Proceed to Checkout</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Benefits */}
        <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-surface-700/50 text-xs sm:text-sm">
          <div className="flex items-center gap-3 text-text-secondary">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-success-600/20 rounded-lg flex items-center justify-center shrink-0">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success-400" />
            </div>
            <span>Secure checkout</span>
          </div>
          <div className="flex items-center gap-3 text-text-secondary">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-secondary-600/20 rounded-lg flex items-center justify-center shrink-0">
              <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary-400" />
            </div>
            <span>Free shipping over $100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
