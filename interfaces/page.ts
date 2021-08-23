export enum LevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface PageAdvantage {
  _id: string;
  title: string;
  description: string;
}

export interface PageModel {
  _id: string;
  tags: string[];
  category: string;
  secondCategory: string;
  alias: string;
  title: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: number;
  advantages: PageAdvantage[];
  createdAt: Date;
  updatedAt: Date;
}
