import { useEffect, useState } from "react";
import { User } from "../context/UserContext";
import { getAddress } from "../helpers/getAddress";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const updateUser = async () => {
    try {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());

      const user = {
        id: data[0]?.id,
        name: data[0]?.name,
        username: data[0]?.username,
        email: data[0]?.email,
        address: getAddress(data[0]?.address),
        phone: data[0]?.phone,
      };
      setUser(user);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    updateUser();
  }, []);

  return {
    user,
    isLoading,
  };
};
