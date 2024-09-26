import Image from "next/image";
import FeedbackForm from "./components/feedback";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 p-8 rounded-3xl shadow-md flex flex-col space-y-6 max-w-[400px]">
        <FeedbackForm />
      </div>
    </div>
  );
}
