import { ShoppingCart, User2 } from "lucide-react";

const Header = () => {
  return (
    <header className="max-w-lg mx-auto sticky top-6 z-50 animate-fade-in">
      <div className="bg-surface-900/80 backdrop-blur-xl border border-surface-700/50 rounded-full shadow-2xl shadow-black/20">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-600/20">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-text-primary">Good Shop</h1>
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
  );
};

export default Header;
