import Image from "next/image";
const SummaryIcon = ({ iconImage }: { iconImage: string }) => {
  return <Image alt="" height={20} width={20} src={iconImage} />;
};

export default SummaryIcon;
