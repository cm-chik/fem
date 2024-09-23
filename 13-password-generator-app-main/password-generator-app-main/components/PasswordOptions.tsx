"use client";
import { useState, useEffect } from "react";

interface PasswordOptionProps {
  passwordCombination: string;
  setPasswordCombination: (combination: string) => void;
}

const PasswordOption: React.FC<PasswordOptionProps> = ({
  passwordCombination,
  setPasswordCombination,
}) => {
  const handleUpperCases = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPasswordCombination(
        passwordCombination + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      );
    } else {
      setPasswordCombination(
        passwordCombination.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "")
      );
    }
  };

  const handleLowerCases = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPasswordCombination(
        passwordCombination + "abcdefghijklmnopqrstuvwxyz"
      );
    } else {
      setPasswordCombination(
        passwordCombination.replace("abcdefghijklmnopqrstuvwxyz", "")
      );
    }
  };

  const handleNumbers = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPasswordCombination(passwordCombination + "1234567890");
    } else {
      setPasswordCombination(passwordCombination.replace("1234567890", ""));
    }
  };
  const handleSymbols = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPasswordCombination(passwordCombination + "!@#$%^&*()_+{}[]:;<>,.?/~");
    } else {
      setPasswordCombination(
        passwordCombination.replace("!@#$%^&*()_+{}[]:;<>,.?/~", "")
      );
    }
  };

  useEffect(() => {
    console.log("Current passwordCombination: ", passwordCombination);
  }, [passwordCombination]); // Log whenever passwordCombination changes

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
