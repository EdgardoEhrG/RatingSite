import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context";

import styles from "./Menu.module.scss";

import classNames from "classnames";

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  useEffect(() => {
    setMenu && setMenu([]);
  }, [setMenu]);

  return (
    <div>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
