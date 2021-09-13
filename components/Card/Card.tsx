import React from "react";

import { CardProps } from "./Card.props";

import styles from "./Card.module.scss";

import classNames from "classnames";

const Card = ({
  color = "white",
  children,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={classNames(styles.card, className, {
        [styles.blue]: color == "blue",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
