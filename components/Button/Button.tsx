import React from "react";

import { ButtonProps } from "./Button.props";

import { Appearances } from "../../constants/appearances";

import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({ appearance, children }: ButtonProps): JSX.Element => {
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

export default Button;
