import React from "react";
import { CartItem } from "@/interfaces";
import { useCartContext } from "@/context/cartContext";
import Image from "next/image";
export default function StartNewOrderButton() {
  const { clearCart, cartItems, totalCartItemsPrice } = useCartContext();
  return (
    <div className="text-black p-4 w-[500px]">
      <Image
        src="/image/icon-order-confirmation.svg"
        alt="Order Confirmation"
        width={100}
        height={100}
      />
      <p className="text-3xl font-bold py-2">Order Confirmed</p>
      <p className="text-xs text-gray-400">We hope you enjoy your food!</p>
      <div className="bg-orange-50">
        {cartItems.map((item: CartItem) => {
          return (
            <div key={item.name}>
              <div className="flex gap-2 py-2 border-b-2 border-gray-200 items-center justify-between">
                <Image src={item.image} alt="" width={100} height={100} />
                <div>
                  <p className="text-black py-2 font-bold">{item.name}</p>
                  <div className="flex gap-4">
                    <p className="text-orange-700 font-bold">
                      {item.quantity}x
                    </p>
                    <p className="text-gray-400">@ ${item.price.toFixed(2)}</p>
                    <p className="text-gray-500 font-bold">
                      ${(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between py-10">
        <p>Order Total</p>
        <p className="font-bold text-2xl">${totalCartItemsPrice.toFixed(2)}</p>
      </div>

      <button
        onClick={() => clearCart()}
        className="flex flex-row text-xs absolute px-3 py-2 max-w-[200px] rounded-full items-center justify-center group bg-orange-700 gap-8 text-white"
      >
        Start New Order
      </button>
    </div>
  );
}
