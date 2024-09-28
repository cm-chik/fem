import GetData from "./getData";

async function GetAverageMark() {
  const allData = await GetData();
  console.log(allData);
}

export default async function GetAverageScore() {
  const averageScore = await GetAverageMark();
  return <div>{averageScore}</div>;
}
