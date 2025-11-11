import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { AuthContext, type User } from "./AuthContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Session expiry (60 minutes)
const SESSION_DURATION = 60 * 60 * 1000;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [persistentUser, setPersistentUser] = useLocalStorage<User | null>(
    "currentUser",
    null
  );
  const [users, setUsers] = useLocalStorage<User[]>("users", []);
  const [sessionExpiry, setSessionExpiry] = useLocalStorage<number | null>(
    "sessionExpiry",
    null
  );

  // Get current user from either localStorage or sessionStorage
  const [user, setUser] = useState<User | null>(() => {
    if (persistentUser) return persistentUser;
    const sessionUser = sessionStorage.getItem("sessionUser");
    return sessionUser ? JSON.parse(sessionUser) : null;
  });

  const logout = useCallback(() => {
    setPersistentUser(null);
    setSessionExpiry(null);
    setUser(null);
    sessionStorage.removeItem("sessionUser");
    sessionStorage.removeItem("sessionExpiry");
  }, [setSessionExpiry, setPersistentUser]);

  // Keep user in sync with persistentUser/sessionStorage
  useEffect(() => {
    if (persistentUser && persistentUser !== user) {
      setUser(persistentUser);
    }
  }, [persistentUser, user]);

  // Check session expiry on mount and set up interval
  useEffect(() => {
    const checkSession = () => {
      if (persistentUser && sessionExpiry) {
        const now = Date.now();
        if (now > sessionExpiry) {
          // Session expired
          logout();
          setTimeout(() => window.alert("Your session has expired..."), 0);
        }
      }
    };

    checkSession();
    // Check every minute
    const interval = setInterval(checkSession, 60000);

    return () => clearInterval(interval);
  }, [persistentUser, sessionExpiry, logout]);

  const hashPassword = async (password: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  };

  const register = async (name: string, email: string, password: string) => {
    if (users.find((u) => u.email === email)) {
      return { success: false, message: "Username already exists" };
    }

    const hashedPassword = await hashPassword(password);

    const newUser: User = {
      id: uuidv4(),
      name: name,
      email: email,
      hashedPassword,
    };

    setUsers([...users, newUser]);

    // Auto login after registration
    const expiry = Date.now() + SESSION_DURATION;
    sessionStorage.setItem("sessionExpiry", expiry.toString());
    sessionStorage.setItem("sessionUser", JSON.stringify(newUser));
    setUser(newUser);

    return { success: true, message: "Registration successful" };
  };

  const login = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    const hashedPassword = await hashPassword(password);

    const foundUser = users.find(
      (u) => u.email === email && u.hashedPassword === hashedPassword
    );

    if (foundUser) {
      const expiry = Date.now() + SESSION_DURATION;
      setUser(foundUser);

      if (rememberMe) {
        setPersistentUser(foundUser);
        setSessionExpiry(expiry);
      } else {
        sessionStorage.setItem("sessionExpiry", expiry.toString());
        sessionStorage.setItem("sessionUser", JSON.stringify(foundUser));
        setPersistentUser(null);
        setSessionExpiry(null);
      }
      return { success: true };
    }
    return { success: false, message: "Invalid credentials" };
  };

  const value = {
    user,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
