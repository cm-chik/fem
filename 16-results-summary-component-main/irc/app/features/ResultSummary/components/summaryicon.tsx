import Image from "next/image";
const SummaryIcon = ({ iconImage }: { iconImage: string }) => {
  return <Image alt="" height={16} width={16} src={iconImage} />;
};

export default SummaryIcon;
