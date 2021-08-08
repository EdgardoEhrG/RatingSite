import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

import { Size } from "../../constants/tags";
import { Appearances } from "../../constants/appearances";

export interface CustomTagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: Size;
  color?: Appearances;
  href?: string;
}
