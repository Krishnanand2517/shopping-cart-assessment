import { Minus, Plus, Trash2 } from "lucide-react";

import type { CartItem } from "../types";

interface CartItemsProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
}

const CartItems = ({
  cartItems,
  updateQuantity,
  removeItem,
}: CartItemsProps) => {
  return (
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
  );
};

export default CartItems;
