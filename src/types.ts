export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  offer?: number;
};

export type CartItem = Product & {
  quantity: number;
};

export type FormDataType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type Promo = {
  code: string;
  discount: number;
};
