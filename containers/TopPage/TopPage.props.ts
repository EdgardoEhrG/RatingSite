import { LevelCategory, PageModel } from "../../interfaces/page";
import { ProductModel } from "../../interfaces/product";

export interface TopPageProps extends Record<string, unknown> {
  firstCategory: LevelCategory;
  page: PageModel;
  products: ProductModel[];
}
