import { useState, useEffect, useCallback } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }
    return currentValue;
  });
  useEffect(() => {
    if (value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        console.log(err);
      }
    }
  }, [value, key]);

  // const removeItemFunc = () => {
  //     localStorage.removeItem(key);
  // };
  const removeItemFun = useCallback(
    (key) => {
      localStorage.removeItem(key);
    },
    [key]
  );
  return [value, setValue, removeItemFun];
};
export default useLocalStorage;
