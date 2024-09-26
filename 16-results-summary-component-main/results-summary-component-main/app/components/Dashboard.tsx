const Dashboard = () => {
  return (
    <>
      <div className="flex flex-wrap max-w-[400px] h-screen items-center justify-between sm:p-6">
        <div className="flex flex-col p-6">
          <p> Your Result</p>
          <p>of 100</p>
          <p>Great</p>
          <p>You scored higher</p>
        </div>
        <div>
          <p>Summary</p>
          <li>Reaction</li>
          <li>Memory</li>
          <li>Verbal</li>
          <li>Visual</li>
          <button>Continue</button>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
