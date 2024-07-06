import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useLocalStorage = <T,>(
  key: string,
  defaultValue: T | null
): [T, Dispatch<SetStateAction<T>>] => {

  const [value, setValue] = useState(() => {
    try {
      let savedValue = localStorage.getItem(key);

      if (savedValue) {
        return JSON.parse(savedValue);
      }

      return defaultValue;
    } catch {
      return defaultValue;
    }
  });


  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
