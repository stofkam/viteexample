import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// 1. Создаем схему
const schema = z.object({
  email: z.string().email("Enter correct email"),
  password: z.string().min(6, "Min 6 characters"),
});

const AuthPage = () => {
  // 2. Подключаем хук с резолвером
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, // isSubmitting — true, пока идет onSubmit
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
    mode: "onBlur", // Валидировать, когда пользователь убрал фокус с поля
  });
  // 3. Функция отправки (вызовется ТОЛЬКО если валидация прошла успешно)

  const onSubmit = async (data) => {
    // data гарантированно соответствует схеме
    console.log("Отправка на сервер:", data);
    // Эмулируем задержку сети
    await new Promise((r) => setTimeout(r, 2000));
    alert("Успех!");
  };
  return (
    <div className="form-container">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div className="field">
          <label>Email</label>
          <input
            {...register("email")}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>
        {/* Кнопка блокируется во время отправки */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Загрузка..." : "Создать аккаунт"}
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
