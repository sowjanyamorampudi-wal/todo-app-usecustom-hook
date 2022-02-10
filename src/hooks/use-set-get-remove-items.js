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
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
    // const removeItemFunc = () => {
    //     localStorage.removeItem(key);
    // };
    const removeItemFun = useCallback(
        (key) => {
            localStorage.removeItem(key);
        }, [key]
    );
    return [value, setValue, removeItemFun];
};
export default useLocalStorage;