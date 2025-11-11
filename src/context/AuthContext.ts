import { createContext } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  hashedPassword: string;
}

type ApiResponse = { success: boolean; message?: string };

export interface AuthContextType {
  user: User | null;
  register: (
    name: string,
    email: string,
    password: string
  ) => Promise<ApiResponse>;
  login: (
    email: string,
    password: string,
    rememberMe: boolean
  ) => Promise<ApiResponse>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
