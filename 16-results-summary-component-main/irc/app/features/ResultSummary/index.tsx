import Result from "./components/result";
import Summary from "./components/summary";
const ResultSummary = () => {
  return (
    <div className="flex flex-wrap max-w-[500px]  items-center justify-between bg-white rounded-xl">
      <Result />
      <Summary />
    </div>
  );
};

export default ResultSummary;
