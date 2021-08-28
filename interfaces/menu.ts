import { LevelCategory } from "./page";

export interface PageItem {
  _id: string;
  alias: string;
  title: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  isOpened?: boolean;
  pages: PageItem[];
}

export interface FirstLevelMenuItem {
  id: LevelCategory;
  route: string;
  name: string;
  icon: JSX.Element;
}
