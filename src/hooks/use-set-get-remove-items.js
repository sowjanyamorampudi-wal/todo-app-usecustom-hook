import { useState, useEffect } from "react";

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
    const removeItemFunc = () => {
        localStorage.removeItem(key);
    };
    return [value, setValue, removeItemFunc];
};
export default useLocalStorage;