import { Product } from "../../../interfaces/index";

export default function ProductCard({ product }: { product: Product }) {
  return <div>{product.name}</div>;
}
