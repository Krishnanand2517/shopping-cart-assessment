import { useState } from "react";
import { ShoppingCart } from "lucide-react";

import type { FormDataType } from "../types";
import AuthCard from "../components/AuthCard";

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <main className="relative mx-auto py-12 max-w-2xs md:max-w-md animate-fade-in">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-primary-600 to-accent-600 rounded-2xl mb-4 shadow-xl shadow-primary-600/20">
            <ShoppingCart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Good Shop
          </h1>
          <p className="text-text-secondary">
            {isLogin
              ? "Welcome back! Log in to continue"
              : "Create your account to get started"}
          </p>
        </div>

        <AuthCard
          formData={formData}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />

        {/* Footer Text */}
        <p className="text-center text-text-tertiary text-sm mt-6">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary-400 font-semibold hover:text-primary-300 transition"
          >
            {isLogin ? "Sign up for free" : "Log in instead"}
          </button>
        </p>
      </main>
    </>
  );
};

export default AuthScreen;
