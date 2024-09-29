const SummaryScore = ({ score }: { score: number }) => {
  return (
    <div>
      <span className="text-gray-800 ">{score}</span>{" "}
      <span className="text-gray-500 ">/100</span>
    </div>
  );
};

export default SummaryScore;
