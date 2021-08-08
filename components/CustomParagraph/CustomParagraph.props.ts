import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

import { Size } from "../../constants/tags";

export interface CustomParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: Size;
}
