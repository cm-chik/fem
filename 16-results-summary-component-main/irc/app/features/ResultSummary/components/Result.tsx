import useFetchCategories from "../hooks/UseFetchCategories";
import calculateAverage from "@/utils/average";
import ResultAverageScore from "./ResultAverageScore";

const Result = () => {
  const { data, isLoading, error } = useFetchCategories();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error </div>;
  const AverageScore: number = calculateAverage(
    data.message.map((item: { score: number }) => item.score)
  );
  return (
    <div className="flex flex-col max-sm:w-full sm:w-[50%] h-[300px] p-6 bg-violetBlue rounded-xl text-gray-300 text-center ">
      Your Result
      <div className="py-10 text-xs text-gray-300">
        <span className="text-white text-2xl font-bold rounded-full p-8 border-2 border-blue-800 bg-gradient-to-bl from-darkFrayBlue">
          <ResultAverageScore data={AverageScore} />
        </span>
        <br />
        of 100
      </div>
      <p className="text-white font-bold">Great</p>
      <p className="text-gray-300 text-xs py-4">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Result;
