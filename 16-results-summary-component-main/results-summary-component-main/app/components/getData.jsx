import Image from "next/image";

async function GetData() {
  const response = await fetch("http://localhost:8829/result");
  return response.json();
}

export default async function GetPersonalData() {
  const PersonalData = await GetData();
  return (
    <>
      {PersonalData.map((personalItem) => (
        <div
          key={personalItem.category}
          className={`flex justify-between rounded-sm py-1 px-2 ${personalItem.bgColor}`}
        >
          <Image
            src={personalItem.icon}
            height={16}
            width={16}
            alt={personalItem.category}
          />
          <div className={`flex justify-between `}>{personalItem.category}</div>
          <span> {personalItem.score} /100</span>
        </div>
      ))}
    </>
  );
}
