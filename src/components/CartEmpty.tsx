import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const CartEmpty = () => {
  return (
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
  );
};

export default CartEmpty;
