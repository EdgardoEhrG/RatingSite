import { GetStaticProps } from "next";

import { MenuItem } from "../interfaces/menu";
import { API } from "../helpers/api";

import { withLayout } from "../layouts/Default/Layout";

import axios from "axios";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  return <></>;
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
