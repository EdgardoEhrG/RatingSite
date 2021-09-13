import React from "react";

import { TopPageProps } from "./TopPage.props";

import { Tags, Size } from "../../constants/tags";
import { Appearances } from "../../constants/appearances";

import CustomTitle from "../../components/CustomTitle/CustomTitle";
import CustomTag from "../../components/CustomTag/CustomTag";
// import Card from "../../components/Card/Card";
import Advantages from "../../components/Advantages/Advantages";

import styles from "./TopPage.module.scss";

import classNames from "classnames";
import CustomParagraph from "../../components/CustomParagraph/CustomParagraph";

const TopPage = ({
  page,
  products,
  firstCategory,
}: TopPageProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <CustomTitle tag={Tags.H1}>{page.title}</CustomTitle>
        {products && (
          <CustomTag color={Appearances.GREY} size={Size.MEDIUM}>
            {products.length}
          </CustomTag>
        )}
        <span>SORTING</span>
      </div>
      <div>PRODUCTS</div>
      <div className={styles.hhTitle}>
        <CustomTitle
          tag={Tags.H2}
        >{`Vacancies - ${page.category}`}</CustomTitle>
        <CustomTag color={Appearances.RED} size={Size.MEDIUM}>
          hh.ru
        </CustomTag>
      </div>
      {page.advantages && page.advantages.length > 0 && (
        <>
          <CustomTitle tag={Tags.H2}>Advantages</CustomTitle>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        ></div>
      )}
      <CustomTitle tag={Tags.H2}>Skills</CustomTitle>
      {page.tags.map((tag) => (
        <CustomTag key={tag} color={Appearances.PRIMARY}>
          {tag}
        </CustomTag>
      ))}
    </div>
  );
};

export default TopPage;
