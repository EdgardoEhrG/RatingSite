import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from "react";

import { Appearances } from "../../constants/appearances";
import { IconPositions } from "../../constants/icons";

export interface CustomButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: Appearances;
  arrow?: IconPositions;
}
