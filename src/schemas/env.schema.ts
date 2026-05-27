import z from "zod";

const envSchema = z.object({
  PORT: z
    .string()
    .trim()
    .min(1, "Port cannot be empty")
    .transform((val) => parseInt(val, 10))
    .pipe(
      z
        .number({ message: "Port must be a valid number" })
        .int("Port must be an integer")
        .positive("Port must be a positive number"),
    ),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
});

export default envSchema;
