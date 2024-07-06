import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SortOption } from "../pages/Dashboard";

type defaultValueType = {
  sortBy: SortOption;
  order: number;
};
// type defaultValueType = string | number | defaultValueType;

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

  console.log(value);

  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
