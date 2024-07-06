import { useEffect, useState } from "react";
import { getAddress } from "../helpers/getAddress";

export const useUser = <T,>(url: string, api: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const updateUser = async () => {
    try {
      let data = await fetch(url).then((res) => res.json());

      if (api === "user") {
        data = {
          id: data[0]?.id,
          name: data[0]?.name,
          username: data[0]?.username,
          email: data[0]?.email,
          address: getAddress(data[0]?.address),
          phone: data[0]?.phone,
        };
      }
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    updateUser();
  }, [url]);

  return {
    data,
    isLoading,
  };
};
