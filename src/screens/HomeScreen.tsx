import { ShoppingCart, Star, TrendingUp, User2 } from "lucide-react";
import { mockData } from "../data/mockData";

const HomeScreen = () => {
  return (
    <>
      {/* Header */}
      <header className="max-w-lg mx-auto sticky top-6 z-50 animate-fade-in">
        <div className="bg-surface-900/80 backdrop-blur-xl border border-surface-700/50 rounded-full shadow-2xl shadow-black/20">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-600/20">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-text-primary">
                  Good Shop
                </h1>
              </div>

              <div className="flex items-center gap-4">
                <button className="relative p-2 hover:bg-surface-800/50 rounded-lg transition-all duration-300 hover:scale-105">
                  <User2 className="w-6 h-6 text-text-secondary" />
                </button>
                <button className="relative p-2 hover:bg-surface-800/50 rounded-lg transition-all duration-300 hover:scale-105">
                  <ShoppingCart className="w-6 h-6 text-text-secondary" />

                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center animate-bounce-in shadow-lg">
                    {2}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12">
        {/* Featured Banner */}
        <div className="bg-linear-to-r from-primary-600 via-accent-600 to-secondary-600 rounded-xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-white" />
              <span className="text-white/90 text-sm font-medium">
                Special Offer
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Weekend Sale</h2>
            <p className="text-white/90 text-lg">
              Up to 50% off on selected items
            </p>
          </div>
        </div>

        {/* Products Grid */}
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
      </main>
    </>
  );
};

export default HomeScreen;
