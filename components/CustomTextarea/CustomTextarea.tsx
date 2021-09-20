import React from "react";

import { CustomTextareaProps } from "./CustomTextarea.props";

import styles from "./CustomTextarea.module.scss";

import classNames from "classnames";

const CustomTextarea = ({
  className,
  ...props
}: CustomTextareaProps): JSX.Element => {
  return (
    <textarea className={classNames(className, styles.inpput)} {...props} />
  );
};

export default CustomTextarea;
