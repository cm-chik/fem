const GeneratePassword = () => {
  return (
    <div>
      <button className="w-[100%] max-w-[500px] generatePassword | bg-sharp-green text-black p-4">
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
  );
};

export default GeneratePassword;
