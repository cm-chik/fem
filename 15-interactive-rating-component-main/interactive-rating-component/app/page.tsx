import Image from "next/image";
import FeedbackForm from "./components/feedback";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <FeedbackForm />
    </div>
  );
}
