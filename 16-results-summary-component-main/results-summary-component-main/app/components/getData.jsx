import Image from "next/image";

async function GetData() {
  const response = await fetch("http://localhost:4004/result");
  return response.json();
}

export default async function GetPersonalData() {
  const PersonalData = await GetData();
  return (
    <>
      {PersonalData.map((personalItem) => (
        <div
          key={personalItem.category}
          className={`flex justify-between rounded-lg py-2 px-3 space-y-1 items-center text-xs`}
          style={{ backgroundColor: personalItem.bgColor }}
        >
          <div className="flex gap-2">
            <Image
              src={personalItem.icon}
              height={16}
              width={16}
              alt={personalItem.category}
            />
            <div
              className={`flex justify-between`}
              style={{ color: personalItem.color }}
            >
              {personalItem.category}
            </div>
          </div>
          <div className="text-xs font-bold">
            {" "}
            {personalItem.score} <span className="text-gray-500 ">/100</span>
          </div>
        </div>
      ))}
    </>
  );
}
