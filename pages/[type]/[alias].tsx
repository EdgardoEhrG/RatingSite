import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import { LevelCategory, PageModel } from "../../interfaces/page";
import { MenuItem } from "../../interfaces/menu";
import { ProductModel } from "../../interfaces/product";
import { API } from "../../helpers/api";

import { firstLevelMenu } from "../../helpers/Menu";

import { withLayout } from "../../layouts/Default/Layout";

import Error404 from "../404";

import TopPage from "../../containers/TopPage/TopPage";

import axios from "axios";
import { ParsedUrlQuery } from "querystring";

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: LevelCategory;
  page: PageModel;
  products: ProductModel[];
}

const Course = ({ firstCategory, page, products }: CourseProps) => {
  if (!page || !products) {
    return <Error404 />;
  }

  return (
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
      </Head>
      <TopPage firstCategory={firstCategory} page={page} products={products} />
    </>
  );
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: m.id,
    });
    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }

  return {
    paths,
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

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id,
    });

    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<PageModel>(
      `${API.topPage.byAlias}/${params.alias}`
    );

    const { data: products } = await axios.post<ProductModel[]>(
      API.product.find,
      {
        category: page.category,
        limits: 10,
      }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
