import React from "react";

import { ReviewProps } from "./Review.props";

import Rating from "../Rating/Rating";
import UserIcon from "../../public/icons/User.svg";

import styles from "./Review.module.scss";

import classNames from "classnames";
import { format } from "date-fns";

const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;

  return (
    <div className={classNames(styles.review, className)} {...props}>
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), "dd MMMM yyyy")}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Review;
