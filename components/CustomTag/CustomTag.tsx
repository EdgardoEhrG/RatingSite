import React from "react";

import { CustomTagProps } from "./CustomTag.props";

import { Size } from "../../constants/tags";
import { Appearances } from "../../constants/appearances";

import styles from "./CustomParagraph.module.scss";
import classNames from "classnames";

const CustomTag = ({
  size = Size.MEDIUM,
  color = Appearances.GHOST,
  href,
  children,
  className,
  ...props
}: CustomTagProps): JSX.Element => {
  return (
    <div
      className={classNames(styles.tag, className, {
        [styles.s]: size === Size.SMALL,
        [styles.m]: size === Size.MEDIUM,
        [styles.l]: size === Size.LARGE,
        [styles.ghost]: color === Appearances.GHOST,
        [styles.red]: color === Appearances.RED,
        [styles.green]: color === Appearances.GREEN,
        [styles.grey]: color === Appearances.GREY,
        [styles.primary]: color === Appearances.PRIMARY,
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default CustomTag;
