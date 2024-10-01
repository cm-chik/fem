import { CartItem } from "@/interfaces";
import Image from "next/image";
import ConfirmOrderButton from "./components/ConfirmOrderButton";
import CartRow from "./components/CartRow";
import { useCartContext } from "@/context/cartContext";

export default function YourCart() {
  const { cartItems, totalCartItems, totalCartItemsPrice } = useCartContext();

  return (
    <div className="text-xl  bg-white p-6 rounded-md h-fit">
      <p className="font-bold text-xl text-orange-700">
        Your Cart ({totalCartItems})
      </p>
      {cartItems.length > 0 ? (
        <div className="flex flex-col space-y-8">
          <div>
            {cartItems.map((item: CartItem) => {
              return (
                <div key={item.name}>
                  <CartRow {...item} />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between">
            <p>Order Total</p>
            <p className="font-bold text-2xl">
              ${totalCartItemsPrice.toFixed(2)}
            </p>
          </div>
          <div className="bg-orange-50 text-xs flex py-4 items-center align-middle justify-center">
            <Image
              src="/image/icon-carbon-neutral.svg"
              alt="carbon-neutral"
              width={20}
              height={20}
            ></Image>
            This is a <span className="font-bold px-1">carbon-neutral </span>
            delivery
          </div>
          <ConfirmOrderButton />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/image/illustration-empty-cart.svg"
            height={128}
            width={128}
            alt="Empty Cart"
          />
          <p className="text-xs text-amber-800">
            Your added items will appear here
          </p>
        </div>
      )}
    </div>
  );
}
