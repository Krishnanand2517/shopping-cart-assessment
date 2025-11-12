const Loading = () => {
  return (
    <div className="min-h-screen bg-background-950 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-primary-600/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-text-secondary text-lg animate-pulse">
          Loading products...
        </p>
      </div>
    </div>
  );
};

export default Loading;
