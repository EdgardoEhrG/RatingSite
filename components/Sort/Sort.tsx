import React from "react";

import { SortProps, SortEnum } from "./Sort.props";

import SortIcon from "../../public/icons/Sort.svg";

import styles from "./Sort.module.scss";

import classNames from "classnames";

const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={classNames(styles.sort, className)} {...props}>
      <span
        className={classNames({
          [styles.active]: sort === SortEnum.Rating,
        })}
        onClick={() => setSort(SortEnum.Rating)}
      >
        <SortIcon className={styles.sortIcon} /> By rating
      </span>
      <span
        className={classNames({
          [styles.active]: sort === SortEnum.Price,
        })}
        onClick={() => setSort(SortEnum.Price)}
      >
        <SortIcon className={styles.sortIcon} /> By price
      </span>
    </div>
  );
};

export default Sort;
