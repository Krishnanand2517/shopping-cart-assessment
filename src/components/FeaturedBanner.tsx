import { TrendingUp } from "lucide-react";

const FeaturedBanner = () => {
  return (
    <div className="bg-linear-to-r from-primary-600 via-accent-600 to-secondary-600 rounded-xl p-6 sm:p-8 mb-6 sm:mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="text-white/90 text-xs sm:text-sm font-medium">
            Special Offer
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">
          Weekend Sale
        </h2>
        <p className="text-white/90 text-sm sm:text-lg">
          Up to 50% off on selected items
        </p>
      </div>
    </div>
  );
};

export default FeaturedBanner;
