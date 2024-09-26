"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = () => {
    console.log(rating);
    setIsSubmitted(true);
  };
  const selectRating = (rating: number) => {
    setRating(rating);
    setIsSelected(true);
  };

  return (
    <>
      {isSubmitted ? (
        <div className="flex flex-col items-center align-middle text-center space-y-6 p-4">
          <Image
            src="/illustration-thank-you.svg"
            alt="thank you"
            width={200}
            height={200}
          />
          <p className="bg-gray-700 p-1 px-4 rounded-full text-xs text-orange-400">
            You selected {rating} out of 5
          </p>
          <p className="text-center text-xl">Thank you!</p>
          <p className="text-gray-400 text-sm">
            We appreicate you taking the time to give a rating. If you ever need
            more support, don't hestitate to get in touch!
          </p>
        </div>
      ) : (
        <>
          <Image
            src="/icon-star.svg"
            alt="star"
            width={40}
            height={40}
            className="rounded-full bg-gray-700 p-3"
          />
          <h1 className="text-2xl font-bold">How did we do?</h1>
          <p className="text-gray-400 text-sm">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-between px-4 py-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
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
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </>
      )}
    </>
  );
};

export default FeedbackForm;
