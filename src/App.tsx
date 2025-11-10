import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-background-950 px-8 md:px-16 lg:px-32 text-text-secondary relative">
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
