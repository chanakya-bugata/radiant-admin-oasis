
import React, { createContext, useContext, useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  const login = useCallback(async (email: string, password: string) => {
    try {
      // Simulate API call
      if (email === "admin@example.com" && password === "password") {
        const user = {
          id: "1",
          email: "admin@example.com",
          name: "Admin User",
          role: "admin",
        };
        setUser(user);
        toast({
          title: "Welcome back!",
          description: "Successfully logged in.",
        });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid email or password",
      });
      throw error;
    }
  }, [toast]);

  const logout = useCallback(async () => {
    setUser(null);
    toast({
      title: "Logged out",
      description: "Successfully logged out.",
    });
  }, [toast]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
