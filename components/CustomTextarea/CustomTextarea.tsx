import React, { ForwardedRef, forwardRef } from "react";

import { CustomTextareaProps } from "./CustomTextarea.props";

import styles from "./CustomTextarea.module.scss";

import classNames from "classnames";

const CustomTextarea = (
  { error, className, ...props }: CustomTextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element => {
  return (
    <div className={classNames(className, styles.textareaWrapper)}>
      <textarea
        className={classNames(styles.textarea, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errorMsg}>{error.message}</span>}
    </div>
  );
};

export default forwardRef(CustomTextarea);
