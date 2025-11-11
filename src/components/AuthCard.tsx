import type { FormDataType } from "../types";
import AuthTabs from "./AuthTabs";
import AuthForm from "./AuthForm";

interface AuthCardProps {
  formData: FormDataType;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthCard = ({
  formData,
  isLogin,
  setIsLogin,
  handleSubmit,
  handleInputChange,
}: AuthCardProps) => {
  return (
    <div className="bg-surface-900/80 backdrop-blur-xl border border-surface-700/50 rounded-3xl shadow-2xl shadow-black/20 overflow-hidden">
      <AuthTabs isLogin={isLogin} setIsLogin={setIsLogin} />

      <div className="p-8">
        <AuthForm
          formData={formData}
          isLogin={isLogin}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default AuthCard;
