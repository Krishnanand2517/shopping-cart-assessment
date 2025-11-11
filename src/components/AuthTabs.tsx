import React from "react";

interface AuthTabsProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const AuthTabs = ({ isLogin, setIsLogin, setError }: AuthTabsProps) => {
  return (
    <div className="flex border-b border-surface-700/50">
      <button
        onClick={() => {
          setIsLogin(true);
          setError("");
        }}
        className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ${
          isLogin
            ? "text-text-primary bg-surface-800/50 border-b-2 border-primary-600"
            : "text-text-tertiary hover:text-text-secondary"
        }`}
      >
        Log In
      </button>
      <button
        onClick={() => {
          setIsLogin(false);
          setError("");
        }}
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
