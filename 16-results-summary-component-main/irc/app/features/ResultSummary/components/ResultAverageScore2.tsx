const ResultAverageScore = ({ data }: { data: number }) => {
  return <>{Math.round(data)}</>;
};

export default ResultAverageScore;
