import React from "react";

import { CustomInputProps } from "./CustomInput.props";

import styles from "./CustomInput.module.scss";

import classNames from "classnames";

const CustomInput = ({
  className,
  ...props
}: CustomInputProps): JSX.Element => {
  return (
    <input
      type="text"
      className={classNames(className, styles.inpput)}
      {...props}
    />
  );
};

export default CustomInput;
