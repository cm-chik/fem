import ConfirmOrderButton from "./components/ConfirmOrderButton";
import Image from "next/image";
export default function YourCart() {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="font-bold text-xl text-orange-700">Your Cart (7)</div>
      <div className="bg-orange-50 text-xs flex">
        <Image
          src="/icon-carbon-neutral.svg"
          alt="carbon-neutral"
          width={20}
          height={20}
        ></Image>
        This is a <span className="font-bold">carbon-neutral</span>delivery
      </div>
      <ConfirmOrderButton />
    </div>
  );
}
