import React from "react";

import { FooterProps } from "./Footer.props";

import classNames from "classnames";
import { format } from "date-fns";

import styles from "./Footer.module.scss";

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={classNames(className, styles.footer)} {...props}>
      <div>Rating © {format(new Date(), "yyyy")}. Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;
