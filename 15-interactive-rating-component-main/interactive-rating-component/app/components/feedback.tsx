"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const selectRating = (rating: number) => {
    setRating(rating);
    setIsSelected(true);
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md flex flex-col space-y-6 max-w-[400px]">
      <Image
        src="/icon-star.svg"
        alt="star"
        width={20}
        height={20}
        className="rounded-full bg-gray-700 p-1"
      />
      <h1 className="text-2xl font-bold">How did we do?</h1>
      <p className="text-gray-400 text-xs">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between px-4 py-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            className={`p-1 bg-gray-700 rounded-full text-gray-400 w-10 h-10
            text-xs  ${
              rating === i ? "bg-white" : "bg-gray-800"
            } active:text-gray-800 hover:bg-orange-500
            hover:text-gray-800`}
            value={i}
            onClick={() => selectRating(i)}
          >
            {i}
          </button>
        ))}
      </div>
      <button
        className="bg-orange-500 p-2 rounded-2xl text-gray-800 uppercase hover:bg-white disabled:bg-gray-500"
        disabled={!isSelected}
      >
        Submit
      </button>
    </div>
  );
};

export default FeedbackForm;
