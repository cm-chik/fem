"use client";

import IconArrowRight from "./IconArrowRight";
import React, { SetStateAction, useEffect, useState } from "react";

export default function Form({
  setPassword,
}: {
  setPassword: (password: string) => void;
}) {
  const [charLength, setCharLength] = useState(10);
  
  const handleCharLength = (e: React.FormEvent<HTMLInputElement>) => {
    setCharLength(e.currentTarget.valueAsNumber);
  };
  const [PasswordCombination, setPasswordCombination] = useState("");
  const handleUpperCases = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPasswordCombination(
        PasswordCombination + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      );
    } else {
      setPasswordCombination(
        PasswordCombination.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "")
      );
    }
  };

  const handleLowerCases = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPasswordCombination(
        PasswordCombination + "abcdefghijklmnopqrstuvwxyz"
      );
    } else {
      setPasswordCombination(
        PasswordCombination.replace("abcdefghijklmnopqrstuvwxyz", "")
      );
    }
  };

  const handleNumbers = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPasswordCombination(PasswordCombination + "1234567890");
    } else {
      setPasswordCombination(PasswordCombination.replace("1234567890", ""));
    }
  };
  const handleSymbols = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPasswordCombination(PasswordCombination + "!@#$%^&*()_+{}[]:;<>,.?/~");
    } else {
      setPasswordCombination(
        PasswordCombination.replace("!@#$%^&*()_+{}[]:;<>,.?/~", "")
      );
    }
  };
  const handleStrength = () => {
    if (charLength == 0) {
      return "N/A";
    } else if (charLength < 10) {
      return "LOW";
    } else if (charLength < 20) {
      return "MEDIUM";
    } else {
      return "HIGH";
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
    }
  };

  return (
    <div className="w-full max-w-[500px]">
      <form
        onSubmit={handleSubmit}
        className=" bg-dark-gray font-Outfit text-white flex flex-col justify-normal p-5 space-y-4"
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
        <div className="flex justify-start items-center space-x-2 ">
          <input
            type="checkbox"
            className="accent-sharp-green appearance-auto border-white"
            id="includeUpper"
            onChange={handleUpperCases}
          />
          <label>Include Uppercase Letters</label>
        </div>
        <div className="flex justify-start space-x-2">
          <input
            type="checkbox"
            className="accent-sharp-green"
            id="includeLower"
            onChange={handleLowerCases}
          />
          <label>Include Lowercase Letters</label>
        </div>
        <div className="flex justify-start space-x-2">
          <input
            type="checkbox"
            className="accent-sharp-green"
            id="includeNumbers"
            onChange={handleNumbers}
          />
          <label>Include Numbers</label>
        </div>
        <div className="flex justify-start space-x-2">
          <input
            type="checkbox"
            className="accent-sharp-green"
            id="includeSymbols"
            onChange={handleSymbols}
          />
          <label>Include Symbols</label>
        </div>
        <div className="flex bg-black justify-between px-10 py-2">
          <p className="text-light-gray">STRENGTH</p>
          <span id="passwordLevel">{handleStrength()}</span>
        </div>
        <button
          type="submit"
          disabled={PasswordCombination === ""}
          className="group disabled:bg-gray-500 w-[100%] max-w-[500px] generatePassword | bg-sharp-green text-black p-4 "
        >
          <div className="group-disabled:bg-gray-500 flex items-center bg-sharp-green justify-center space-x-2 ">
            <p>GENERATE</p>
            <IconArrowRight />
          </div>
        </button>
      </form>
    </div>
  );
};