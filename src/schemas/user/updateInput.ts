import z from "zod";

const updateInputSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").optional(),
  email: z.string().email("Invalid email format").optional(),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
});

type updateInput = z.infer<typeof updateInputSchema>
export { updateInputSchema, updateInput}