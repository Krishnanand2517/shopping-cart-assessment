import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";

import type { FormDataType } from "../types";

interface AuthFormProps {
  formData: FormDataType;
  isLogin: boolean;
  rememberMe: boolean;
  setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthForm = ({
  formData,
  isLogin,
  rememberMe,
  setRememberMe,
  handleSubmit,
  handleInputChange,
}: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = isLogin
    ? formData.email.trim() !== "" && formData.password.trim() !== ""
    : formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== "" &&
      formData.confirmPassword.trim() !== "" &&
      formData.password === formData.confirmPassword;

  return (
    <div className="space-y-5">
      {/* Name Field (Register Only) */}
      {!isLogin && (
        <div className="animate-slide-in">
          <label className="block text-text-secondary text-sm font-medium mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full bg-surface-800/50 text-text-primary pl-12 pr-4 py-3.5 rounded-xl border border-surface-700/50 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20 transition-all duration-300"
            />
          </div>
        </div>
      )}

      {/* Email Field */}
      <div>
        <label className="block text-text-secondary text-sm font-medium mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
            className="w-full bg-surface-800/50 text-text-primary pl-12 pr-4 py-3.5 rounded-xl border border-surface-700/50 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20 transition-all duration-300"
          />
        </div>
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-text-secondary text-sm font-medium mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="••••••••"
            className="w-full bg-surface-800/50 text-text-primary pl-12 pr-12 py-3.5 rounded-xl border border-surface-700/50 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20 transition-all duration-300"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-tertiary hover:text-text-secondary transition"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password (Register Only) */}
      {!isLogin && (
        <div className="animate-slide-in">
          <label className="block text-text-secondary text-sm font-medium mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="••••••••"
              className="w-full bg-surface-800/50 text-text-primary pl-12 pr-4 py-3.5 rounded-xl border border-surface-700/50 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20 transition-all duration-300"
            />
          </div>
        </div>
      )}

      {/* Remember Me & Forgot Password (Login Only) */}
      {isLogin && (
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-surface-700 bg-surface-800 text-primary-600 focus:ring-2 focus:ring-primary-600/20"
            />
            <span className="text-text-secondary text-sm group-hover:text-text-primary transition">
              Remember me
            </span>
          </label>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!isFormValid}
        className={`w-full font-semibold py-3.5 rounded-xl ${
          isFormValid
            ? "bg-linear-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary-600/20 cursor-pointer transition-all transform"
            : "bg-surface-700 text-text-tertiary cursor-not-allowed"
        }`}
      >
        {isLogin ? "Log In" : "Create Account"}
      </button>
    </div>
  );
};

export default AuthForm;
