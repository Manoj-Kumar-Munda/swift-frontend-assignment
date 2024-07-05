import { createContext, ReactNode } from "react";

interface UserContextProviderProps {
  children: ReactNode;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

interface UserContextTypes {
  user: User | null;
  setUser: () => void;
}

const initialValues = {
  user: null,
  setUser: () => {},
};

export const UserContext = createContext<UserContextTypes>(initialValues);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;

  const setUser = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );

    const user = {
      id: data[0]?.id,
      name: data[0]?.name,
      username: data[0]?.username,
      email: data[0]?.email,
      address : data[0]?.address
    };
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
