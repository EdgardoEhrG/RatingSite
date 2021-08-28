import { GetStaticProps } from "next";

import { withLayout } from "../layouts/Default/Layout";

import axios from "axios";

function Search(): JSX.Element {
  return <></>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
