import type { FormDataType } from "../types";
import AuthTabs from "./AuthTabs";
import AuthForm from "./AuthForm";

interface AuthCardProps {
  formData: FormDataType;
  isLogin: boolean;
  rememberMe: boolean;
  setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const AuthCard = ({
  formData,
  isLogin,
  rememberMe,
  setRememberMe,
  setIsLogin,
  handleSubmit,
  handleInputChange,
  error,
  setError,
}: AuthCardProps) => {
  return (
    <div className="bg-surface-900/80 backdrop-blur-xl border border-surface-700/50 rounded-3xl shadow-2xl shadow-black/20 overflow-hidden">
      <AuthTabs isLogin={isLogin} setIsLogin={setIsLogin} setError={setError} />

      <div className="p-8">
        {error && (
          <div className="bg-error-100/10 text-error-500 p-3 rounded-lg backdrop-blur-xl mb-4 text-sm font-semibold">
            {error}
          </div>
        )}

        <AuthForm
          formData={formData}
          isLogin={isLogin}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default AuthCard;
