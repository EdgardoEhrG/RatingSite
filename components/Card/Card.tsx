import React, { ForwardedRef, forwardRef } from "react";

import { CardProps } from "./Card.props";

import styles from "./Card.module.scss";

import classNames from "classnames";

const Card = (
  { color = "white", children, className, ...props }: CardProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
  return (
    <div
      className={classNames(styles.card, className, {
        [styles.blue]: color == "blue",
      })}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};

export default forwardRef(Card);
