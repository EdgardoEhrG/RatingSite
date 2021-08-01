import { ReactNode } from "react";

import { Appearances } from "../../constants/appearances";

export interface ButtonProps {
  children: ReactNode;
  appearance: Appearances;
}
