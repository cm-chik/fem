"use client";

import IconArrowRight from "./IconArrowRight";
import React, { SetStateAction, useEffect, useState } from "react";

export default function Form({
  setPassword,
}: {
  setPassword: (password: string) => void;
}) {
  const [charLength, setCharLength] = useState(10);

  const copiedMsg = document.querySelector(".copied_msg");
  const handleCharLength = (e: React.FormEvent<HTMLInputElement>) => {
    setCharLength(e.currentTarget.valueAsNumber);
  };

  const [PasswordCombination, setPasswordCombination] = useState("");

  const handleInclude = (
    e: React.ChangeEvent<HTMLInputElement>,
    passedvalue: string
  ) => {
    if (e.target.checked) {
      setPasswordCombination(PasswordCombination + passedvalue);
    } else {
      setPasswordCombination(PasswordCombination.replace(passedvalue, ""));
    }
  };

  const [values, setValues] = useState([
    {
      name: "uppercase",
      type: "checkbox",
      label: "Include Uppercase Letters",
      included: false,
      value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    {
      name: "lowercase",
      type: "checkbox",
      label: "Include LowerCase Letters",
      included: false,
      value: "abcdefghijklmnopqrstuvwxyz",
    },
    {
      name: "numbers",
      type: "checkbox",
      label: "Include Numbers",
      included: false,
      value: "1234567890",
    },
    {
      name: "symbols",
      type: "checkbox",
      label: "Include Symbols",
      included: false,
      value: "!@#$%^&*()_+{}[]:;<>,.?/~",
    },
  ]);
  const handleStrength = () => {
    if (charLength == 0) {
      return <div>"N/A"</div>;
    } else if (charLength < 6) {
      return (
        <div className="uppercase flex items-center justify-around space-x-2">
          <p>too weak!</p>
          <span className="bg-red border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
          <span className="border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
          <span className="border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
          <span className="border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
        </div>
      );
    } else if (charLength < 12) {
      return (
        <div className="uppercase flex items-center justify-around space-x-2">
          <p>weak</p>
          <span className="bg-red border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
          <span className="bg-red border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
          <span className="border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
          <span className="border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
        </div>
      );
    } else if (charLength < 21) {
      return (
        <div className="uppercase flex items-center justify-around space-x-2">
          <p>medium</p>
          <span className="bg-orange border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
          <span className="bg-orange border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
          <span className="bg-orange border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
          <span className="border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
        </div>
      );
    } else {
      return (
        <div className="uppercase flex items-center justify-around space-x-2">
          <p>strong</p>
          <span className="bg-sharp-green border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
          <span className="bg-sharp-green border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
          <span className="bg-sharp-green border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
          <span className="bg-sharp-green border-2 border-red-500 h-[1.75rem] w-[0.625rem] inline-block"></span>
        </div>
      );
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let password = "";
    if (PasswordCombination !== "") {
      for (let i = 0; i < charLength; i++) {
        const randomNumber = Math.floor(
          Math.random() * PasswordCombination.length
        );
        password += PasswordCombination[randomNumber];
      }
      setPassword(password);
      copiedMsg?.classList.add("hidden");
    }
  };

  return (
    <div className="w-full max-w-[500px]">
      <form
        onSubmit={handleSubmit}
        className=" bg-dark-grey font-Outfit text-white flex flex-col justify-normal p-5 space-y-4"
      >
        <div className="flex justify-between">
          <label>Character Length</label>
          <span className="passwordLength | text-sharp-green text-2xl">
            {charLength}
          </span>
        </div>
        <input
          id="lengthSlider"
          type="range"
          min="5"
          max="30"
          value={charLength}
          onChange={handleCharLength}
          className="w-full h-2 rounded-lg appearance-auto cursor-pointer accent-sharp-green"
        />
        {values.map((item) => (
          <div
            className="flex justify-start items-center space-x-2"
            key={item.name}
          >
            <input
              name={item.name}
              type={item.type}
              className="accent-sharp-green appearance-auto border-white"
              id={item.name}
              onChange={(e) => handleInclude(e, item.value)}
            />
            <label>{item.label}</label>
          </div>
        ))}
        <div className="flex bg-black justify-between w-[100%] py-2 px-4 items-center align-middle">
          <p className="text-light-grey uppercase">strength</p>
          <span id="passwordLevel">{handleStrength()}</span>
        </div>
        <button
          type="submit"
          disabled={PasswordCombination === ""}
          className="group disabled:bg-grey-500 w-[100%] max-w-[500px] generatePassword | bg-sharp-green text-black p-4 "
        >
          <div className="group-disabled:bg-grey-500 flex items-center bg-sharp-green justify-center space-x-2 ">
            <p className="uppercase">generate</p>
            <IconArrowRight />
          </div>
        </button>
      </form>
    </div>
  );
};