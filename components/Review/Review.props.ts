import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ReviewModel } from "../../interfaces/product";

export interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: ReviewModel;
}
