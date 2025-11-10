import { Star } from "lucide-react";

import { mockData } from "../data/mockData";

const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {mockData.map((product) => (
        <div
          key={product.id}
          className="bg-surface-900 rounded-xl border border-surface-700 hover:border-primary-600/50 transition-all duration-300 overflow-hidden group"
        >
          {/* Product Image */}
          <div className="relative bg-white p-6 h-64 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Product Info */}
          <div className="p-4">
            <div className="mb-2">
              <span className="text-xs text-secondary-400 font-medium uppercase tracking-wide">
                {product.category}
              </span>
            </div>

            <h3 className="text-text-primary font-semibold mb-2 line-clamp-2 h-12">
              {product.title}
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-warning-500 text-warning-500" />
                <span className="text-text-secondary text-sm font-medium">
                  {product.rating.rate}
                </span>
              </div>
              <span className="text-text-tertiary text-sm">
                ({product.rating.count})
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-text-primary">
                  ${product.price}
                </p>
              </div>
              <button className="px-4 py-2 rounded-lg font-medium cursor-pointer transition bg-primary-600 hover:bg-primary-700 text-white">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
