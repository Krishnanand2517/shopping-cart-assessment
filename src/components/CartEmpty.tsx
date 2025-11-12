import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const CartEmpty = () => {
  return (
    <div className="bg-surface-900/80 backdrop-blur-xl border border-surface-700/50 rounded-2xl p-8 sm:p-12 text-center max-w-md mx-auto flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[50vh]">
      <ShoppingCart className="w-14 h-14 sm:w-16 sm:h-16 text-text-tertiary mb-4" />
      <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
        Your cart is empty
      </h3>
      <p className="text-sm sm:text-base text-text-secondary mb-6 px-2">
        Add some products to get started
      </p>
      <Link
        to="/"
        className="bg-linear-to-r from-primary-600 to-accent-600 text-white px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-semibold hover:from-primary-700 hover:to-accent-700 transition-transform duration-300 active:scale-95"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default CartEmpty;
