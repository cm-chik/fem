import { Product } from "../../../interfaces/index";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const desktopPath = "/image/" + product.image.desktop.split("/").pop();
  const tabletPath = "/image/" + product.image.tablet.split("/").pop();
  const mobilePath = "/image/" + product.image.mobile.split("/").pop();
  const thumbnailPath = "/image/" + product.image.thumbnail.split("/").pop();
  return (
    <div className="flex flex-col p-1">
      <Image
        className="sm:hidden max-sm:block border-2 rounded-xl"
        src={thumbnailPath}
        alt={product.name}
        width={100}
        height={96}
      />
      <Image
        className="max-md:block md:hidden border-2  rounded-xl"
        src={mobilePath}
        alt={product.name}
        width={654}
        height={424}
      />
      <Image
        className="max-md:hidden max-xl:block hidden border-2  rounded-xl"
        src={tabletPath}
        alt={product.name}
        width={427}
        height={424}
      />
      <Image
        className="max-xl:hidden block border-2  rounded-xl"
        src={desktopPath}
        alt={product.name}
        width={480}
        height={480}
      />
      <div className="">
        <button className="">Add to cart</button>
      </div>
      <div className="text-gray-400 text-xs">{product.category}</div>
      <div className="font-bold text-lg">{product.name}</div>
      <div className="text-orange-700">${product.price.toFixed(2)}</div>
    </div>
  );
}
