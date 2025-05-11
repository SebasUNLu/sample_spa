"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import UserDTO from "@/app/DTOs/user.dto";

type AuthContextType = {
  user: UserDTO | null;
  token: string | null;
  login: (user: UserDTO, token: string, remember: boolean) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("aloe_token");
    const savedUser = localStorage.getItem("aloe_user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (user: UserDTO, token: string, remember: boolean) => {
    setUser(user);
    setToken(token);
    if (remember) {
      localStorage.setItem("aloe_token", token);
      localStorage.setItem("aloe_user", JSON.stringify(user));
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("aloe_token");
    localStorage.removeItem("aloe_user");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return context;
}
