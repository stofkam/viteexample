import { createContext, useContext, useState } from "react";

// 1. Создаем контекст (с дефолтным значением)
const ThemeContext = createContext(null);

// 2. Создаем Провайдер (компонент-обертка)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Создаем кастомный хук (для удобства)
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

// 4. Использование в компоненте
// const { theme, toggleTheme } = useTheme();
