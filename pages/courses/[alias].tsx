import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import { PageModel } from "../../interfaces/page";
import { MenuItem } from "../../interfaces/menu";
import { ProductModel } from "../../interfaces/product";

import { withLayout } from "../../layouts/Default/Layout";

import axios from "axios";
import { ParsedUrlQuery } from "querystring";

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: PageModel;
  products: ProductModel[];
}

const firstCategory = 0;

const Course = ({ menu, page, products }: CourseProps) => {
  return <div>{products}</div>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    { firstCategory }
  );

  return {
    paths: menu.flatMap((m) => m.pages.map((p) => `/courses/${p.alias}`)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    { firstCategory }
  );

  const { data: page } = await axios.get<PageModel>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`
  );

  const { data: products } = await axios.post<ProductModel[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`,
    {
      category: page.category,
      limits: 10,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  };
};
