import { useEffect } from "react";
const useSetItem = (key, value) => {
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return value;
};

const useGetItem = (key) => {
    let value = JSON.parse(localStorage.getItem(key));
    if (value) {
        return value;
    } else {
        return [];
    }
};
const useRemoveItem = (key) => {
    const RemoveItem = () => {
        localStorage.removeItem(key);
    };
    return RemoveItem;
};
export { useSetItem, useGetItem, useRemoveItem };