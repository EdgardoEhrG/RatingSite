import React, { ForwardedRef, forwardRef, useRef, useState } from "react";

import Image from "next/image";

import { ProductProps } from "./Product.props";

import { Appearances } from "../../constants/appearances";
import { IconPositions } from "../../constants/icons";

import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import CustomButton from "../CustomButton/CustomButton";
import Divider from "../Divider/Divider";
import CustomTag from "../CustomTag/CustomTag";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

import styles from "./Product.module.scss";

import classNames from "classnames";
import { motion } from "framer-motion";

const Product = (
  { product, className, ...props }: ProductProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
  const reviewRef = useRef<HTMLDivElement>(null);

  const [isReviewOpened, setReviewOpened] = useState<boolean>(false);

  const variants = {
    visible: { opacity: 1, height: "auto" },
    hidden: { opacity: 0, height: 0 },
  };

  const scrollToReview = () => {
    setReviewOpened(true);
    reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={className} ref={ref} {...props}>
      <Card>
        <div className={styles.logo}>
          <Image
            src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`}
            alt={product.title}
            width={70}
            height={70}
            layout="responsive"
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {product.price}
          {product.oldPrice && (
            <CustomTag className={styles.oldPrice} color={Appearances.GREEN}>
              {product.price - product.oldPrice}
            </CustomTag>
          )}
        </div>
        <div className={styles.credit}>
          {product.credit}/<span className={styles.month}>month</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map((category) => (
            <CustomTag
              className={styles.category}
              key={category}
              color={Appearances.GHOST}
            >
              {category}
            </CustomTag>
          ))}
        </div>
        <div className={styles.priceTitle}>Price</div>
        <div className={styles.rateTitle}>
          <a href="#ref" onClick={scrollToReview}>
            {product.reviewCount} feedback(-s)
          </a>
        </div>
        <Divider className={styles.separator} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map((c) => (
            <div className={styles.characteristics} key={c.name}>
              <span className={styles.characteristicsName}>{c.name}</span>
              <span className={styles.characteristicsDots}></span>
              <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Advantages</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Disadvantages</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <Divider className={classNames(styles.separator, styles.separator2)} />
        <div className={styles.actions}>
          <CustomButton appearance={Appearances.PRIMARY}>
            Learn more
          </CustomButton>
          <CustomButton
            className={styles.reviewBtn}
            appearance={Appearances.GHOST}
            arrow={isReviewOpened ? IconPositions.DOWN : IconPositions.RIGHT}
            onClick={() => setReviewOpened(!isReviewOpened)}
          >
            Reed fbs
          </CustomButton>
        </div>
      </Card>
      <motion.div
        animate={isReviewOpened ? "visible" : "hidden"}
        variants={variants}
        initial="hidden"
      >
        <Card color="blue" className={styles.reviews} ref={reviewRef}>
          {product.reviews.map((review) => (
            <div key={review._id}>
              <Review review={review} />
              <Divider />
            </div>
          ))}
          <ReviewForm productId={product._id} />
        </Card>
      </motion.div>
    </div>
  );
};

export default motion(forwardRef(Product));
