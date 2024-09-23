const PasswordOption = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-start items-center space-x-2 ">
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

    </div>
  );
};

export default PasswordOption;
