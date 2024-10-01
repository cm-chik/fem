import React from "react";
import { CartItem } from "@/interfaces";
import { useCartContext } from "@/context/cartContext";
import Image from "next/image";
export default function StartNewOrderButton() {
  const { clearCart, cartItems, totalCartItemsPrice } = useCartContext();
  return (
    <div className="text-black p-4  w-[500px] space-y-6">
      <Image
        src="/image/icon-order-confirmed.svg"
        alt="Order Confirmation"
        width={50}
        height={50}
      />
      <p className="text-3xl font-bold pt-2 pb-1">Order Confirmed</p>
      <p className="text-xs text-gray-400 pb-4">We hope you enjoy your food!</p>
      <div className="bg-orange-50 px-4 ">
        {cartItems.map((item: CartItem) => {
          return (
            <div
              key={item.name}
              className="flex justify-between items-center border-b-[1px] border-gray-200 "
            >
              <div className="flex gap-2 py-2 items-center">
                <Image src={item.image} alt="" width={50} height={50} />
                <div className="py-2">
                  <p className="text-black  font-bold">{item.name}</p>
                  <div className="flex gap-4">
                    <p className="text-orange-700 font-bold">
                      {item.quantity}x
                    </p>
                    <p className="text-gray-400">@ ${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className="text-gray-800 font-bold">
                ${(item.quantity * item.price).toFixed(2)}
              </div>
            </div>
          );
        })}
        <div className="flex justify-between py-4">
          <p>Order Total</p>
          <p className="font-bold text-2xl">
            ${totalCartItemsPrice.toFixed(2)}
          </p>
        </div>
      </div>

      <button
        onClick={() => clearCart()}
        className="my-2 py-2 w-[100%] rounded-full  hover:bg-green-700  duration-300 bg-orange-700  text-white"
      >
        Start New Order
      </button>
    </div>
  );
}
