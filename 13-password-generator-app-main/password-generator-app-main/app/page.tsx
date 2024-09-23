"use client";

import PasswordOptions from "@/components/PasswordOptions";
import PasswordLengthSlider from "../components/passwordLengthSlider";
import GeneratePassword from "@/components/generatePassword";
import PasswordDisplay from "@/components/PasswordDisplay";
import PasswordStrength from "@/components/PasswordStrength";
import PasswordGeneratorButton from "@/components/PasswordGeneratorButton";
import { useState } from "react";

const HomePage = () => {
  const [passwordCombination, setPasswordCombination] = useState("");
  return (
    <div className="bg-deep-gray flex flex-wrap flex-col items-center justify-center bg-black font-spaceMono space-y-5 px-4">
      <div className="text-light-gray pt-10">Password Generator</div>
      <PasswordDisplay />
      <div className="w-[100%] max-w-[500px] bg-dark-gray font-Outfit text-white flex flex-col justify-normal p-6 space-y-4">
        <PasswordLengthSlider />
        <PasswordGeneratorButton />
        <PasswordStrength />
        <GeneratePassword />
      </div>
    </div>
  );
};
export default HomePage;
