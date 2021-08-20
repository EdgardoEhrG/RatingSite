import React from "react";

import { SidebarProps } from "./Sidebar.props";

import "./Sidebar.module.scss";

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return <div {...props}>SIDEBAR</div>;
};

export default Sidebar;
