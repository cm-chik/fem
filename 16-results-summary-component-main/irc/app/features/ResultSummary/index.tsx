import Result from "./components/Result2";
import Summary from "./components/Summary2";
const ResultSummary = () => {
  return (
    <div className="flex flex-wrap max-w-[500px]  items-center justify-between bg-white rounded-xl">
      <Result />
      <Summary />
    </div>
  );
};

export default ResultSummary;
