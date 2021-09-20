import React from "react";

import { DividerProps } from "./Divider.props";

import styles from "./Divider.module.scss";

import classNames from "classnames";

const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
  return <hr className={classNames(className, styles.divider)} {...props} />;
};

export default Divider;
