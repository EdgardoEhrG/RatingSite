import React from "react";

import { SidebarProps } from "./Sidebar.props";

import Menu from "../Menu/Menu";
import Search from "../../components/Search/Search";

import classNames from "classnames";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} className={classNames(className, styles.sidebar)}>
      <Search />
      <Menu />
    </div>
  );
};

export default Sidebar;
