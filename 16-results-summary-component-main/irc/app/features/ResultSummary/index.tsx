import ResultComponent from "./components/resultComponent";
import useFetchCategories from "./hooks/UseFetchCategories";
import calculateSum from "@/utils/sum";
const ResultSummary = () => {
  const { data, isLoading, error } = useFetchCategories();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error </div>;
  const sumOfScore: number = calculateSum(
    data.message.map((item: { score: number }) => item.score)
  );
  console.log(sumOfScore);
  return (
    <>
      <ResultComponent data={sumOfScore} />
    </>
  );
};

export default ResultSummary;
