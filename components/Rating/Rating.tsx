import React, { useState, useEffect, KeyboardEvent } from "react";

import { RatingProps } from "./Rating.props";

import StarIcon from "../../public/icons/Star.svg";

import styles from "./Rating.module.scss";
import classNames from "classnames";

const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArr = ratingArr.map(
      (ratingElement: JSX.Element, i: number) => {
        return (
          <span
            key={i}
            className={classNames(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => handleClick(i + 1)}
          >
            <StarIcon
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
                isEditable && handleSpace(i + 1, e)
              }
            />
          </span>
        );
      }
    );
    setRatingArr(updatedArr);
  };

  const changeDisplay = (i: number): void => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const handleClick = (i: number): void => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>): void => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArr.map((rating, i) => (
        <span key={i}>{rating}</span>
      ))}
    </div>
  );
};

export default Rating;
