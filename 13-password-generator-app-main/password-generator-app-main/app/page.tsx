"use client";

import PasswordOptions from "@/components/Form"; // Corrected casing
import { useState } from "react";
import IconCopy from "@/components/IconCopy";

const HomePage = () => {
  const [password, setPassword] = useState("");

  function copyPassword() {
    if (password) {
      navigator.clipboard.writeText(password);
    } else navigator.clipboard.writeText("");
  }
  return (
    <div className="bg-deep-gray flex flex-wrap flex-col items-center justify-center bg-black font-spaceMono space-y-5">
      <div className="text-light-gray pt-10">Password Generator</div>
      <div className=" bg-dark-gray font-Outfit text-white flex items-center justify-between p-4">
        <input
          className="text-xl bg-dark-gray"
          placeholder="Click Generate"
          disabled
          value={password}
        ></input>
        <button className="flex space-x-2" onClick={copyPassword}>
          <p className="text-sharp-green hidden">COPIED</p>
          <IconCopy />
        </button>
      </div>
      <PasswordOptions setPassword={setPassword} />
    </div>
  );
};
export default HomePage;
