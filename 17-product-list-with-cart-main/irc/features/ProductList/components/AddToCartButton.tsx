import React from "react";
import Image from "next/image";
import { useCartContext } from "@/context/cartContext";
import { Product } from "@/interfaces";

export const AddToCartButton = (product: Product) => {
  const { addProductToCart, getCartQuantity } = useCartContext();
  const isInCart = getCartQuantity(product);
  return (
    <div className="flex items-center justify-center group">
      {!isInCart ? (
        <button
          className="flex flex-row text-xs absolute border-gray-400 border-[1px] rounded-full px-3 py-2 bg-white group-hover:border-orange-700 font-bold gap-2 duration-300 group-hover:text-orange-700"
          onClick={() => addProductToCart(product)}
        >
          <Image
            src="/image/icon-add-to-cart.svg"
            height={15}
            width={15}
            alt="Add to cart"
          />
          Add to cart
        </button>
      ) : (
        <div className="flex flex-row text-xs absolute px-3 py-2 max-w-[200px] rounded-full items-center justify-center group bg-orange-700 gap-8 text-white">
          <Image
            src="/image/icon-decrement-quantity.svg"
            height={15}
            width={15}
            alt="Decrease"
            className="bg-orange-700 w-4 h-4 p-1 shrink-0 grow-0  rounded-full border-white border-[1px]"
            //onClick={() =>
            // getCartQuantity(product) > 1
            //   ? decreaseQuantity(product)
            //   : removeItemFromCart(product)
            //} //decreaseQuantity
          />
          <div className="w-1">{getCartQuantity(product)}</div>
          <Image
            src="/image/icon-increment-quantity.svg"
            height={15}
            width={15}
            alt="Increase"
            className="bg-orange-700 w-4 h-4 p-1 shrink-0 grow-0  rounded-full border-white border-[1px]"
            onClick={() => product} //increaseQuantity
          />
        </div>
      )}
    </div>
  ); // Closed return statement
};
