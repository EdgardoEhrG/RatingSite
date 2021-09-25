import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

import { Appearances } from "../../constants/appearances";

import UpIcon from "../../public/icons/Up.svg";
import CloseIcon from "../../public/icons/Close2.svg";
import MenuIcon from "../../public/icons/Burger.svg";

export const icons = {
  UpIcon,
  CloseIcon,
  MenuIcon,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconName;
  appearance: Appearances;
}
