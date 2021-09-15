import { ProductModel } from "../../interfaces/product";
import { SortEnum } from "./Sort.props";

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating };

export interface SortState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReducer = (
  state: SortState,
  action: SortActions
): SortState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };
    default:
      throw new Error("Wrong type of sortin");
  }
};
