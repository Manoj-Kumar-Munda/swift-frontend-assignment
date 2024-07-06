import { createContext, ReactNode } from "react";
import { useUser } from "../hooks/useUser";

export interface ContextProviderProps {
  children: ReactNode;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
}

interface UserContextTypes {
  user: User | null;
  isLoading: boolean;
}

const initialValues = {
  user: null,
  isLoading: false,
};

export const UserContext = createContext<UserContextTypes>(initialValues);

export const UserContextProvider = ({ children }: ContextProviderProps) => {
 
  const { data: user, isLoading } = useUser<User>("https://jsonplaceholder.typicode.com/users", "user");


  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
