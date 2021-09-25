import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";

import { MenuItem } from "../../interfaces/menu";
import { LevelCategory } from "../../interfaces/page";

import { firstLevelMenu } from "../../helpers/Menu";
import { API } from "../../helpers/api";

import { withLayout } from "../../layouts/Default/Layout";

import axios from "axios";
import { ParsedUrlQuery } from "querystring";

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: LevelCategory;
}

function Type({ firstCategory }: TypeProps): JSX.Element {
  return <></>;
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => m.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
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

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id,
  });
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};
