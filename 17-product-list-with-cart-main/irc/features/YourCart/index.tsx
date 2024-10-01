export default function YourCart() {
  return <div className="font-bold text-xl">Your Cart</div>;
}

// import ConfirmOrderButton from "./components/ConfirmOrderButton";
// import Image from "next/image";
// import { CartContext } from "../../context/cartContext";
// import { Product } from "@/interfaces";
// import { useContext } from "react";

// export default function YourCart() {
//   const [cart, setCart] = useContext(CartContext);

//   return (
//     <div className="bg-white rounded-xl p-4">
//       <div className="font-bold text-xl text-orange-700">Your Cart (7)</div>
//       {/* {cart.map((cartItem: Product) => {
//         return <div key={cartItem.id}>{cartItem.name}</div>;
//       })} */}
//       <div className="bg-orange-50 text-xs flex">
//         <Image
//           src="/image/icon-carbon-neutral.svg"
//           alt="carbon-neutral"
//           width={20}
//           height={20}
//         ></Image>
//         This is a <span className="font-bold">carbon-neutral </span>delivery
//       </div>
//       <ConfirmOrderButton />
//     </div>
//   );
// }
