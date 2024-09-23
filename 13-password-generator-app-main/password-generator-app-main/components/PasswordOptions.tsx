"use client";

const PasswordOptions = () => {
  const handleUpperCases = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPasswordCombination(
        setPasswordCombination + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      );
    } else {
      setPasswordCombination(
        setPasswordCombination.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "")
      );
    }
  };

  const handleLowerCases = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPasswordCombination(
        setPasswordCombination + "abcdefghijklmnopqrstuvwxyz"
      );
    } else {
      setPasswordCombination(
        setPasswordCombination.replace("abcdefghijklmnopqrstuvwxyz", "")
      );
    }
  };

  const handleNumbers = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPasswordCombination(setPasswordCombination + "1234567890");
    } else {
      setPasswordCombination(setPasswordCombination.replace("1234567890", ""));
    }
  };
  const handleSymbols = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPasswordCombination(
        setPasswordCombination + "!@#$%^&*()_+{}[]:;<>,.?/~"
      );
    } else {
      setPasswordCombination(
        setPasswordCombination.replace("!@#$%^&*()_+{}[]:;<>,.?/~", "")
      );
    }
  };

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

export default PasswordOptions;
function setPasswordCombination(arg0: string) {
  throw new Error("Function not implemented.");
}
