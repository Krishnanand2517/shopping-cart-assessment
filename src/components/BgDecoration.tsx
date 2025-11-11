const BgDecoration = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl animate-pulse animate-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary-600/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default BgDecoration;
