import React from "react";

import { CustomParagraphProps } from "./CustomParagraph.props";

import { Size } from "../../constants/tags";

import styles from "./CustomParagraph.module.scss";
import classNames from "classnames";

const CustomParagraph = ({
  children,
  size = Size.MEDIUM,
  className,
  ...props
}: CustomParagraphProps): JSX.Element => {
  return (
    <p
      className={classNames(styles.p, className, {
        [styles.s]: size === Size.SMALL,
        [styles.m]: size === Size.MEDIUM,
        [styles.l]: size === Size.LARGE,
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default CustomParagraph;
