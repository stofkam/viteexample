import { useState } from "react";

function useLocalStorage(key, initialValue) {
    // 1. Инициализация стейта (ленивая)
    const [storeValue, setStoreValue] = useState(() => {
        if (typeof window === "undefined") {
            return initialValue; // Защита от SSR
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }

    })

    // 2. Обновление стейта + запись в localStorage
    const setValue = (value) => {
        try {
            // Поддержка functional update, как в useState
            const valueToStore = value instanceof Function ? value(storeValue) : value;
            setStoreValue(valueToStore);
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.log(error);
        }
    }

    return [storeValue, setValue];
}

// Использование:
// const [theme, setTheme] = useLocalStorage("app-theme", "light");
// setTheme("dark"); // Автоматически сохранится в браузере