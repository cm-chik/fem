"use client";
import { useState } from "react";

const PasswordOption = () => {
  const [passwordCombination, setPasswordCombination] = useState();
  const handleUpperCases = (e) => {};
  const handleLowerCases = (e) => {};
  const handleNumbers = () => {};
  const handleSymbols = () => {};

  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default PasswordOption;
