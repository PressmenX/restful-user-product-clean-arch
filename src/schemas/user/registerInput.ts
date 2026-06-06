import z from "zod";

const registerUserSchema = z.object({
  name: z
    .string("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: z
    .string("Email is required")
    .trim()
    .email("Invalid email format")
    .toLowerCase(),
  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

type RegisterUser = z.infer<typeof registerUserSchema>;

export { registerUserSchema, RegisterUser };
