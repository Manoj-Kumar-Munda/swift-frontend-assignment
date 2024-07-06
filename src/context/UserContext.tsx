import { createContext, ReactNode } from "react";
import { useUser } from "../hooks/useUser";
import { User } from "../types/user";

export interface ContextProviderProps {
  children: ReactNode;
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
