import React from "react";

import { CustomButtonProps } from "./CustomButton.props";

import { Appearances } from "../../constants/appearances";

import classNames from "classnames";

import styles from "./CustomButton.module.scss";

const CustomButton = ({
  appearance,
  children,
}: CustomButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.primary]: appearance === Appearances.PRIMARY,
        [styles.ghost]: appearance === Appearances.GHOST,
      })}
    >
      {children}
    </button>
  );
};

export default CustomButton;
