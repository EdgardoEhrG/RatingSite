import React, { ForwardedRef, forwardRef } from "react";

import { CustomInputProps } from "./CustomInput.props";

import styles from "./CustomInput.module.scss";

import classNames from "classnames";

const CustomInput = (
  { error, className, ...props }: CustomInputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={classNames(className, styles.input, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errorMsg}>{error.message}</span>}
    </div>
  );
};

export default forwardRef(CustomInput);
