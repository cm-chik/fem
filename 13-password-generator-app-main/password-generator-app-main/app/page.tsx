"use client";

import PasswordOptions from "@/components/Form"; // Corrected casing
import { useState } from "react";
import IconCopy from "@/components/IconCopy";

const HomePage = () => {
  const [password, setPassword] = useState("");
  return (
    <div className="bg-deep-gray flex flex-wrap flex-col items-center justify-center bg-black font-spaceMono space-y-5 px-4">
      <div className="text-light-gray pt-10">Password Generator</div>
      <div className="w-[100%] max-w-[500px] bg-dark-gray font-Outfit text-white flex items-center justify-between p-4">
        <input
          className="text-xl bg-dark-gray"
          placeholder="P4$5W0rD!"
          disabled
          value={password}
        ></input>
        <div className="flex space-x-2">
          <p className="text-sharp-green hidden">COPIED</p>
          <IconCopy />
        </div>
      </div>
      <PasswordOptions />
    </div>
  );
};
export default HomePage;
