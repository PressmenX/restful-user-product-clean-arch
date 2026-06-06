import z from "zod";
import { createProductSchema } from "./createProductSchema";

const updateProductSchema = createProductSchema.partial();
type UpdateProductInput = z.infer<typeof updateProductSchema>;

export { updateProductSchema, UpdateProductInput };
