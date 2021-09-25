import React from "react";

import { Appearances } from "../../constants/appearances";

import { ButtonIconProps, icons } from "./ButtonIcon.props";

import styles from "./ButtonIcon.module.scss";

import classNames from "classnames";

const ButtonIcon = ({
  icon,
  appearance,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconComponent = icons[icon];

  return (
    <button
      className={classNames(styles.button, className, {
        [styles.primary]: appearance === Appearances.PRIMARY,
        [styles.ghost]: appearance === Appearances.GHOST,
      })}
      {...props}
    >
      <IconComponent />
    </button>
  );
};

export default ButtonIcon;
