"use client";

import Form from "@/components/Form"; // Corrected casing
import { useState } from "react";
import IconCopy from "@/components/IconCopy";

const HomePage = () => {
  const [password, setPassword] = useState("");
  function copyPassword() {
    const copiedMsg = document.querySelector(".copied_msg");
    if (password) {
      navigator.clipboard.writeText(password);
      copiedMsg?.classList.remove("hidden");
    } else {
      navigator.clipboard.writeText("");
      copiedMsg?.classList.add("hidden");
    }
  }
  return (
    <div className="bg-deep-grey flex flex-wrap flex-col items-center justify-center font-spaceMono space-y-5 w-screen h-screen p-4">
      <div className="text-light-grey pt-10">Password Generator</div>
      <div className="w-full max-w-[500px] bg-dark-grey font-Outfit text-white flex items-center justify-between p-4">
        <input
          className="text-xl bg-dark-grey"
          placeholder="Select options"
          disabled
          value={password}
        ></input>
        <button className="flex space-x-2" onClick={copyPassword}>
          <p className="copied_msg | text-sharp-green hidden uppercase">
            copied
          </p>
          <IconCopy />
        </button>
      </div>
      <Form setPassword={setPassword} />
    </div>
  );
};
export default HomePage;
