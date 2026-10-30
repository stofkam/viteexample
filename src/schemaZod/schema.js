import { z } from "zod";

const signUpSchema = z.object({
    username: z.string().min(2, "Name to short (min 2)"),
    email: z.email("Not correct Email"),
    age: z.number({ invalid_type_error: "Age must be number" })
        .min(18, "You shud be 18+"),
    password: z.string().min(6, "Password must be min 6"),
    confirmPassword: z.string()

}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords not eaquele",
    path: ["confirmPassword"] // Куда повесить ошибку
})