import useFetchCategories from "../hooks/UseFetchCategories";
import calculateAverage from "@/utils/average";
import ResultAverageScore from "./resultAverageScore";

const Result = () => {
  const { data, isLoading, error } = useFetchCategories();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error </div>;
  const AverageScore: number = calculateAverage(
    data.message.map((item: { score: number }) => item.score)
  );
  return (
    <div className="flex flex-col max-sm:w-full sm:w-[50%] h-[300px] p-6 bg-[#7857ff] rounded-xl text-white text-center ">
      <p>Your Result</p>
      <ResultAverageScore data={AverageScore} />
      of 100
      <p>Great</p>
      <p className="text-gray-300 text-xs py-4">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Result;
