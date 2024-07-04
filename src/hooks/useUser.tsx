import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchUser = async () => {};

  useEffect(() => {
    fetchUser();
  }, []);
  return {
    user,
    isLoading,
    isError,
  };
};
