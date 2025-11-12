import { Link } from "react-router-dom";
import { LogOut, ShoppingCart } from "lucide-react";

import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";

const Header = () => {
  const { logout } = useAuth();
  const { totalItems } = useCart();

  return (
    <header className="max-w-full sm:max-w-lg mx-auto sticky top-4 sm:top-6 z-50 animate-fade-in px-3 sm:px-0">
      <div className="bg-surface-900/80 backdrop-blur-xl border border-surface-700/50 rounded-2xl sm:rounded-full shadow-2xl shadow-black/20">
        <div className="px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Title */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-600/20">
                <ShoppingCart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-text-primary">
                Good Shop
              </h1>
            </Link>

            {/* Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => logout()}
                className="relative p-2 sm:p-2.5 hover:bg-surface-800/50 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <LogOut className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary" />
              </button>

              <Link
                to="/cart"
                className="relative p-2 sm:p-2.5 hover:bg-surface-800/50 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-primary-600 text-white text-[10px] sm:text-xs rounded-full flex items-center justify-center animate-bounce-in shadow-lg">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
