import { Minus, Plus, Trash2 } from "lucide-react";

import { useCart } from "../hooks/useCart";

const CartItems = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  return (
    <div className="lg:col-span-2 space-y-3 sm:space-y-4 px-2 sm:px-0">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-surface-900/80 backdrop-blur-xl border border-surface-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary-600/30 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Product Image */}
              <div className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center justify-center mx-auto sm:mx-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="grow">
                <div className="flex justify-between items-start mb-2">
                  <div className="max-w-[75%] sm:max-w-none">
                    <span className="text-[10px] sm:text-xs text-secondary-400 font-medium uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h3 className="text-text-primary font-semibold mt-1 text-sm sm:text-base line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-text-tertiary hover:text-error-500 transition p-1.5 sm:p-2 hover:bg-surface-800/50 rounded-lg shrink-0"
                  >
                    <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                <p className="hidden md:line-clamp-2 text-text-tertiary text-xs sm:text-sm mb-3 sm:mb-4">
                  {item.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-surface-800/50 hover:bg-surface-700 text-text-secondary rounded-lg transition"
                    >
                      <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                    <span className="text-text-primary font-semibold w-8 text-center text-sm sm:text-base">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-surface-800/50 hover:bg-surface-700 text-text-secondary rounded-lg transition"
                    >
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-center sm:text-right">
                    <p className="text-lg sm:text-2xl font-bold text-text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-text-tertiary text-xs sm:text-sm">
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
