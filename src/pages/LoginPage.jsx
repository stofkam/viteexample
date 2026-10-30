import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Перенаправление на главную
    // { replace: true } заменяет текущую запись в истории (кнопка "Назад" не вернет на логин)

    // Или на шаг назад
    // navigate(-1);
    navigate("/", { replace: true });
  };

  return <button onClick={handleLogin}>Back to home</button>;
};

export default LoginPage;
