import React from "react";
import { CartItem } from "@/interfaces";
import Image from "next/image";
import { useCartContext } from "@/context/cartContext";

export default function CartRow(props: CartItem) {
  const { removeFromCart } = useCartContext();
  return (
    <div className="flex gap-2 py-2 border-b-2 border-gray-200 items-center justify-between">
      <div>
        <p className="text-black py-2 font-bold">{props.name}</p>
        <div className="flex gap-4">
          <p className="text-orange-700 font-bold">{props.quantity}x</p>
          <p className="text-gray-400">@ ${props.price.toFixed(2)}</p>
          <p className="text-gray-500 font-bold">
            ${(props.quantity * props.price).toFixed(2)}
          </p>
        </div>
      </div>
      <button className="border-orange-200 rounded-full border-2 p-1">
        <Image
          src="/image/icon-remove-item.svg"
          alt="remove"
          width={20}
          height={20}
          onClick={() => removeFromCart(props)}
        />
      </button>
    </div>
  );
}
