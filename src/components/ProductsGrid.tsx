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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => {
        const finalPrice = getDiscountedPrice(product.price, product.offer);
        const presentInCart = cartItems.some((item) => item.id === product.id);

        return (
          <div
            key={product.id}
            className="bg-surface-900 rounded-xl border border-surface-700 hover:border-primary-600/50 transition-all duration-300 overflow-hidden group"
          >
            <div className="relative bg-white p-6 h-64 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <div className="mb-2">
                <span className="text-xs text-secondary-400 font-medium uppercase tracking-wide">
                  {product.category}
                </span>
              </div>

              <h3 className="text-text-primary font-semibold mb-2 line-clamp-2 h-12">
                {product.title}
              </h3>

              <p className="hidden md:line-clamp-3 text-text-tertiary text-sm mb-2">
                {product.description}
              </p>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= Math.round(product.rating.rate)
                          ? "fill-warning-500 text-warning-500"
                          : "text-surface-600"
                      }`}
                    />
                  ))}
                </div>

                <span className="text-warning-500 text-sm">
                  {product.rating.rate}
                </span>
                <span className="text-text-tertiary text-sm">
                  ({product.rating.count})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  {product.offer && product.offer > 0 ? (
                    <>
                      <p className="text-2xl font-bold text-text-primary">
                        ${finalPrice.toFixed(2)}
                      </p>

                      <span className="text-sm text-gray-500 line-through">
                        ${product.price.toFixed(2)}
                      </span>

                      {product.offer && (
                        <span className="ml-2 text-green-600 font-medium text-sm mt-2">
                          {product.offer}% off
                        </span>
                      )}
                    </>
                  ) : (
                    <p className="text-2xl font-bold text-text-primary">
                      ${product.price.toFixed(2)}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => addToCart({ ...product, price: finalPrice })}
                  disabled={presentInCart}
                  className={`mt-3 rounded-lg px-4 py-2 font-medium transition ${
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
