"use client";

import { useState } from "react";

const CharacterLength = () => {
  const [charLength, setCharLength] = useState(10);
  const handleLengthChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCharLength(e.currentTarget.valueAsNumber);
  };

  return (
    <div>
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
        onChange={handleLengthChange}
        className="w-full h-2 rounded-lg appearance-auto cursor-pointer accent-sharp-green"
      />
    </div>
  );
};

export default CharacterLength;
