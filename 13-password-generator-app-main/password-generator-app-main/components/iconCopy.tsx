const CopyIcon = () => {
  return (
    <div className="w-[100%] max-w-[500px] bg-dark-gray font-Outfit text-white flex items-center justify-between p-4">
      <p className="text-xl"> LYpYTMIafZ</p>
      <div className="flex space-x-2">
        <p className="text-sharp-green hidden">COPIED</p>
        <img src="/images/icon-copy.svg " width={20} height={20} alt="" />
      </div>
    </div>
  );
};
export default CopyIcon;
