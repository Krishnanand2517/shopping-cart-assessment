import { Star } from "lucide-react";

import type { Product } from "../types";
import { useCart } from "../hooks/useCart";

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid = ({ products }: ProductsGridProps) => {
  const { addToCart, cartItems } = useCart();

  const getDiscountedPrice = (price: number, offer?: number) =>
    offer ? price - price * (offer / 100) : price;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0">
      {products.map((product) => {
        const finalPrice = getDiscountedPrice(product.price, product.offer);
        const presentInCart = cartItems.some((item) => item.id === product.id);

        return (
          <div
            key={product.id}
            className="bg-surface-900 rounded-xl border border-surface-700 hover:border-primary-600/50 transition-all duration-300 overflow-hidden group"
          >
            {/* Image Section */}
            <div className="relative bg-white p-4 sm:p-6 h-56 sm:h-64 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Info Section */}
            <div className="p-3 sm:p-4">
              <div className="mb-1 sm:mb-2">
                <span className="text-[10px] sm:text-xs text-secondary-400 font-medium uppercase tracking-wide">
                  {product.category}
                </span>
              </div>

              <h3 className="text-text-primary font-semibold mb-1 sm:mb-2 text-sm sm:text-base line-clamp-2 h-10 sm:h-12">
                {product.title}
              </h3>

              {/* Description hidden on mobile */}
              <p className="hidden md:line-clamp-3 text-text-tertiary text-xs sm:text-sm mb-2">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${
                        star <= Math.round(product.rating.rate)
                          ? "fill-warning-500 text-warning-500"
                          : "text-surface-600"
                      }`}
                    />
                  ))}
                </div>

                <span className="text-warning-500 text-xs sm:text-sm">
                  {product.rating.rate}
                </span>
                <span className="text-text-tertiary text-xs sm:text-sm">
                  ({product.rating.count})
                </span>
              </div>

              {/* Price + Button */}
              <div className="flex items-center justify-between gap-2">
                <div>
                  {product.offer && product.offer > 0 ? (
                    <>
                      <p className="text-lg sm:text-2xl font-bold text-text-primary">
                        ${finalPrice.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-1">
                        <span className="text-xs sm:text-sm text-gray-500 line-through">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-green-600 font-medium text-xs sm:text-sm">
                          {product.offer}% off
                        </span>
                      </div>
                    </>
                  ) : (
                    <p className="text-lg sm:text-2xl font-bold text-text-primary">
                      ${product.price.toFixed(2)}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => addToCart({ ...product, price: finalPrice })}
                  disabled={presentInCart}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-sm sm:text-base transition ${
                    presentInCart
                      ? "bg-surface-700 text-text-tertiary cursor-not-allowed"
                      : "bg-primary-600 hover:bg-primary-700 text-white"
                  }`}
                >
                  {presentInCart ? "Added" : "Add"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
