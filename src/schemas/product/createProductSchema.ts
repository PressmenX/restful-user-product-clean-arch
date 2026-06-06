import z from "zod";

const createProductSchema = z.object({
  name: z
    .string("Name is required")
    .min(3, "Name must be at least 3 characters"),
  price: z.number("Price is required").positive("Invalid price value"),
  stock: z
    .number("Stock is required")
    .int("Stock value must be a whole number")
    .nonnegative("Invalid stock value"),
  categoryId: z.string("CategoryId is required"),
});

type ProductInput = z.infer<typeof createProductSchema>

export {createProductSchema, ProductInput}
