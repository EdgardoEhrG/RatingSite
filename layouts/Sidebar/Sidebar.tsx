import React from "react";

import { SidebarProps } from "./Sidebar.props";

import Menu from "../Menu/Menu";

import SearchIcon from "../../public/icons/Search.svg";

import classNames from "classnames";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} className={classNames(className, styles.sidebar)}>
      <SearchIcon className={styles.logo} />
      <Menu />
    </div>
  );
};

export default Sidebar;
