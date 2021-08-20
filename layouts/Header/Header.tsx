import React from "react";

import { HeaderProps } from "./Header.props";

import "./Header.module.scss";

const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <header {...props}>HEADER</header>;
};

export default Header;
