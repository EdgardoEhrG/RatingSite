import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from "react";

import { Appearances } from "../../constants/appearances";

export interface CustomButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: Appearances;
}
