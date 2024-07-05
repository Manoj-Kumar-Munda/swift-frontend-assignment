import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { getAddress } from "../helpers/getAddress";
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
  // const [user, setUser] = useState<User | null>(null);
  // const [isLoading, setIsLoading] = useState(true);


  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const data = await fetch(
  //         "https://jsonplaceholder.typicode.com/users"
  //       ).then((res) => res.json());

  //       const user = {
  //         id: data[0]?.id,
  //         name: data[0]?.name,
  //         username: data[0]?.username,
  //         email: data[0]?.email,
  //         address: getAddress(data[0]?.address),
  //         phone: data[0]?.phone,
  //       };
  //       setUser(user);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, []);
  const { user, isLoading } = useUser();

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
