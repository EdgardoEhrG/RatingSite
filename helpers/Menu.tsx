import { FirstLevelMenuItem } from "../interfaces/menu";
import { LevelCategory } from "../interfaces/page";

import CourseIcon from "../public/icons/Hat.svg";
import ServiceIcon from "../public/icons/Cloud.svg";
import BookIcon from "../public/icons/Book.svg";
import ProductIcon from "../public/icons/Box.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CourseIcon />,
    id: LevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServiceIcon />,
    id: LevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BookIcon />,
    id: LevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductIcon />,
    id: LevelCategory.Products,
  },
];
