import React from "react";

import { CustomButtonProps } from "./CustomButton.props";

import ArrowIcon from "../../public/icons/Arrow.svg";

import { Appearances } from "../../constants/appearances";
import { IconPositions } from "../../constants/icons";

import classNames from "classnames";

import styles from "./CustomButton.module.scss";

const CustomButton = ({
  appearance,
  children,
  arrow = IconPositions.NONE,
  className,
  ...props
}: CustomButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.primary]: appearance === Appearances.PRIMARY,
        [styles.ghost]: appearance === Appearances.GHOST,
      })}
      {...props}
    >
      {children}
      {arrow !== IconPositions.NONE && (
        <span
          className={classNames(styles.arrow, {
            [styles.down]: arrow === IconPositions.DOWN,
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default CustomButton;
