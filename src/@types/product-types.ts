export type TProductTypes = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type TProductsTypes = {
  total: number;
  skip: number;
  limit: 30;
  products: TProductTypes[];
};
