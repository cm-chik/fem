const CharacterLength = () => {
  return (
    <div>
      <div className="flex justify-between">
        <label>Character Length</label>
        <span className="passwordLength | text-sharp-green text-2xl">10</span>
      </div>
      <input
        id="lengthSlider"
        type="range"
        min="5"
        max="30"
        className="w-full h-2 rounded-lg appearance-auto cursor-pointer accent-sharp-green"
      />
    </div>
  );
};

export default CharacterLength;
