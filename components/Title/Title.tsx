import React from "react";

import { TitleProps } from "./title.props";

import { Tags } from "../../constants/tags";

import styles from "./Title.module.scss";

const Title = ({ tag, children }: TitleProps): JSX.Element => {
  switch (tag) {
    case Tags.H1:
      return <h1 className={styles.h1}>{children}</h1>;
    case Tags.H2:
      return <h2 className={styles.h2}>{children}</h2>;
    case Tags.H3:
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      return <></>;
  }
};

export default Title;
