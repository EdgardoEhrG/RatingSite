import React from "react";

import { FooterProps } from "./Footer.props";

import "./Footer.module.scss";

const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <footer {...props}>FOOTER</footer>;
};

export default Footer;
