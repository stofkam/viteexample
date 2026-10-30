import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  // register — функция для привязки инпута
  // handleSubmit — обертка, которая отменит preventDefault и соберет данные
  // formState — объект с ошибками и состоянием
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // data — это уже готовый JSON: { login: "...", password: "..." }
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "20px" }}>
      {/* 1. Регистрируем поле "login" */}
      <input {...register("login", { required: true })} placeholder="Login" />
      {/* Если есть ошибка — показываем */}
      {errors.login && <p style={{ color: "red" }}>Login is required</p>}
      {/* 2. Регистрируем поле "password" */}
      <input {...register("password")} type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

// Установка: npm install react-hook-form
// npm install zod @hookform/resolvers
