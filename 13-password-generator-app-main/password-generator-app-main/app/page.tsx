export default function Home() {
  return (
    <div className=" bg-deep-gray flex flex-col items-center justify-center bg-black font-spaceMono space-y-5">
      <div className="text-light-gray ">Password Generator</div>
      <div className=" bg-dark-gray font-Outfit text-white flex items-center justify-between p-4">
        <p className="text-xl"> LYpYTMIafZ</p>
        <div className="flex space-x-2">
          <p className="text-sharp-green">COPIED</p>
          <img src="/images/icon-copy.svg " width={20} height={20} alt="" />
        </div>
      </div>
      <div className="  bg-dark-gray font-Outfit text-white flex flex-col justify-normal p-6 space-y-4">
        <div className="flex justify-between">
          <label>Character Length</label>
          <span className="passwordLength | text-sharp-green text-2xl">10</span>
        </div>
        <input
          id="lengthSlider"
          type="range"
          min="1"
          max="20"
          className="w-full h-2 rounded-lg appearance-auto cursor-pointer accent-sharp-green"
        />

        <div className="flex justify-start items-center space-x-2">
          <input
            type="checkbox"
            className="accent-sharp-green appearance-auto border-white"
            id="includeUpper"
          />
          <label>Include Uppercase Letters</label>
        </div>
        <div className="flex justify-start space-x-2">
          <input
            type="checkbox"
            className="accent-sharp-green"
            id="includeLower"
          />
          <label>Include Lowercase Letters</label>
        </div>
        <div className="flex justify-start space-x-2">
          <input
            type="checkbox"
            className="accent-sharp-green"
            id="includeNumbers"
          />
          <label>Include Numbers</label>
        </div>
        <div className="flex justify-start space-x-2">
          <input
            type="checkbox"
            className="accent-sharp-green"
            id="includeSymbols"
          />
          <label>Include Symbols</label>
        </div>
        <div className="flex bg-black justify-between px-10 py-2">
          <p className="text-light-gray">STRENGTH</p>
          <span id="passwordLevel">LEVEL</span>
        </div>

        <button className="generatePassword | bg-sharp-green text-black p-4">
          <div className="flex items-center bg-sharp-green justify-center space-x-2">
            <p>GENERATE</p>
            <img
              src="/images/icon-arrow-right.svg "
              width={20}
              height={20}
              alt=""
            />
          </div>
        </button>
      </div>
    </div>
  );
}
