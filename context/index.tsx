import { createContext, PropsWithChildren, useState } from "react";

import { MenuItem } from "../interfaces/menu";
import { LevelCategory } from "../interfaces/page";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: LevelCategory;
  setMenu?: (newMunu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: LevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
