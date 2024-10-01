import React from "react";
import CartRow from "./CartRow";
import { CartItem } from "@/interfaces";
import { useCartContext } from "@/context/cartContext";

export default function CartPanel() {
  const { cartItems, totalCartItemsPrice } = useCartContext();
  return (
    <div>
      <div>
        {cartItems.map((item: CartItem) => {
          return (
            <div key={item.name}>
              <CartRow {...item} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between py-10">
        <p>Order Total</p>
        <p className="font-bold text-2xl">${totalCartItemsPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
