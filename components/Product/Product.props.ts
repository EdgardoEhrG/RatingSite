import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ProductModel } from "../../interfaces/product";

export interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
}
