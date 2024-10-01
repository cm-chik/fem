export interface Product {
  name: string;
  category: string;
  price: number;
  image: { [key: string]: string };
}

export interface CartItem {
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
}
