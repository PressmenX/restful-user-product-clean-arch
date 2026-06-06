import z from "zod";

const loginUserSchema = z.object({
  email: z
    .string("Email is required")
    .trim()
    .email("Invalid email format")
    .toLowerCase(),
  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export {loginUserSchema}

