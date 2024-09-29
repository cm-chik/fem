import Result from "./components/Result";
import Summary from "./components/Summary";
const ResultSummary = () => {
  return (
    <div className="flex flex-wrap max-w-[500px]  items-center justify-between bg-white rounded-xl">
      <Result />
      <Summary />
    </div>
  );
};

export default ResultSummary;
