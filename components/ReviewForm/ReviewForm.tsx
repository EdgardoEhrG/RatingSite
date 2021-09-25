import React, { useState } from "react";

import {
  ReviewFormProps,
  IReviewForm,
  IReviewResponse,
} from "./ReviewForm.props";
import { API } from "../../helpers/api";

import { Appearances } from "../../constants/appearances";

import CustomInput from "../CustomInput/CustomInput";
import Rating from "../Rating/Rating";
import CustomTextarea from "../CustomTextarea/CustomTextarea";
import CustomButton from "../CustomButton/CustomButton";
import CloseIcon from "../../public/icons/Close.svg";

import styles from "./ReviewForm.module.scss";

import classNames from "classnames";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewResponse>(API.review.created, {
        ...formData,
        productId,
      });

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Smt went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classNames(styles.reviewForm, className)} {...props}>
        <CustomInput
          {...register("name", {
            required: { value: true, message: "Fill name field" },
          })}
          placeholder="Name"
          error={errors.name}
        />
        <CustomInput
          {...register("title", {
            required: { value: true, message: "Fill title field" },
          })}
          className={styles.title}
          placeholder="Title"
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Score:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Choose rating" } }}
            render={({ field }) => (
              <Rating
                ref={field.ref}
                isEditable
                rating={field.value}
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          />
        </div>
        <CustomTextarea
          {...register("description", {
            required: { value: true, message: "Fill description field" },
          })}
          className={styles.description}
          placeholder="Feedback text"
          error={errors.description}
        />
        <div className={styles.submit}>
          <CustomButton appearance={Appearances.PRIMARY}>Send</CustomButton>
        </div>
      </div>
      {isSuccess && (
        <div className={classNames(styles.panel, styles.success)}>
          <div className={styles.successTitle}>
            Your feedback was sent successfully
          </div>
          <CloseIcon
            className={styles.close}
            onClick={() => setIsSuccess(false)}
          />
        </div>
      )}
      {error && (
        <div className={classNames(styles.panel, styles.error)}>
          {error}
          <CloseIcon className={styles.close} onClick={() => setError("")} />
        </div>
      )}
    </form>
  );
};

export default ReviewForm;
