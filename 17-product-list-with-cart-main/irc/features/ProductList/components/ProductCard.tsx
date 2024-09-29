import { Product } from "../../../interfaces/index";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  console.log(product);
  const imagePath = "/" + product.image.thumbnail.split("/").pop();
  return (
    <div className="flex flex-col">
      <Image src={imagePath} alt={product.name} width={100} height={100} />
      <div className="flex items-center justify-between">
        <button>Add to cart</button>
      </div>
      <div className="text-gray-400 text-xs">{product.category}</div>
      <div className="">{product.name}</div>
      <div className="text-orange-700">${product.price}</div>
    </div>
  );
}
