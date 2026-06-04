import Category from "../../entities/Category";
import Product from "../../entities/Product";

type ProductWithCategory = Product & { category: Category | null };
type ProductRes = Omit<ProductWithCategory, "categoryId">;
const productResDTO = ({
  id,
  name,
  price,
  stock,
  category,
}: ProductWithCategory): ProductRes => ({
  id,
  name,
  price,
  stock,
  category,
});

export { productResDTO, ProductRes, ProductWithCategory };
