import React from "react";

interface AuthTabsProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthTabs = ({ isLogin, setIsLogin }: AuthTabsProps) => {
  return (
    <div className="flex border-b border-surface-700/50">
      <button
        onClick={() => setIsLogin(true)}
        className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ${
          isLogin
            ? "text-text-primary bg-surface-800/50 border-b-2 border-primary-600"
            : "text-text-tertiary hover:text-text-secondary"
        }`}
      >
        Log In
      </button>
      <button
        onClick={() => setIsLogin(false)}
        className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ${
          !isLogin
            ? "text-text-primary bg-surface-800/50 border-b-2 border-primary-600"
            : "text-text-tertiary hover:text-text-secondary"
        }`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthTabs;
