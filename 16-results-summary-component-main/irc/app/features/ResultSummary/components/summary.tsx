import useFetchCategories from "../hooks/UseFetchCategories";
import SummaryIcon from "./summaryicon";
import SummaryScore from "./summaryScore";

const Result = () => {
  const { data, isLoading, error } = useFetchCategories();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error </div>;

  return data.message.map((item) => (
    <div key={item.category}>
      <p>Summary</p>
      <SummaryScore score={item.score} />
      <SummaryIcon iconImage={item.icon} />
    </div>
  ));
};

export default Result;
