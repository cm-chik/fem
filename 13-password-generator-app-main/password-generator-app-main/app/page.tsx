import PasswordOption from "@/components/passwordOption";
import CharacterLength from "../components/characterLength";
import GeneratePassword from "@/components/generatePassword";
import CopyIcon from "@/components/iconCopy";
import PasswordStrength from "@/components/passwordStrength";
const HomePage = () => {
  return (
    <div className="bg-deep-gray flex flex-wrap flex-col items-center justify-center bg-black font-spaceMono space-y-5 px-4">
      <div className="text-light-gray pt-10">Password Generator</div>
      <CopyIcon />
      <div className="w-[100%] max-w-[500px] bg-dark-gray font-Outfit text-white flex flex-col justify-normal p-6 space-y-4">
        <CharacterLength />
        <PasswordOption />
        <PasswordStrength />
        <GeneratePassword />
      </div>
    </div>
  );
};
export default HomePage;
