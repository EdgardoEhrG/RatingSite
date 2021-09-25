import React, { useEffect, useReducer } from "react";

import { TopPageProps } from "./TopPage.props";

import { Tags, Size } from "../../constants/tags";
import { Appearances } from "../../constants/appearances";
import { SortEnum } from "../../components/Sort/Sort.props";

import CustomTitle from "../../components/CustomTitle/CustomTitle";
import CustomTag from "../../components/CustomTag/CustomTag";
import Advantages from "../../components/Advantages/Advantages";
import Sort from "../../components/Sort/Sort";
import Product from "../../components/Product/Product";

import { sortReducer } from "../../components/Sort/sort.reducer";

import styles from "./TopPage.module.scss";

const TopPage = ({
  page,
  products,
  firstCategory,
}: TopPageProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <CustomTitle tag={Tags.H1}>{page.title}</CustomTitle>
        {sortedProducts && (
          <CustomTag color={Appearances.GREY} size={Size.MEDIUM}>
            {sortedProducts.length}
          </CustomTag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((product) => (
            <Product key={product._id} layout product={product} />
          ))}
      </div>
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
