export interface ProductCharacteristic {
  name: string;
  value: string;
}

export interface ReviewModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
}

export interface ProductModel {
  _id: string;
  title: string;
  description: string;
  link: string;
  categories: string[];
  tags: string;
  price: number;
  credit: number;
  oldPrice: number;
  characteristics: ProductCharacteristic[];
  createdAt: Date;
  updatedDate: Date;
  __v: number;
  image: string;
  initialRating: number;
  review: ReviewModel[];
  reviewCount: number;
  reviewAvg?: number;
  advantages?: string;
  disadvantages?: string;
}
