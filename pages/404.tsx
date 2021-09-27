import React from "react";

import { Tags } from "../constants/tags";

import CustomTitle from "../components/CustomTitle/CustomTitle";

const Page404 = (): JSX.Element => {
  return (
    <>
      <CustomTitle tag={Tags.H1}>Error 404</CustomTitle>
    </>
  );
};

export default Page404;
