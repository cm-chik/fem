import GetPersonalData from "./getData";
import GetAverageScore from "./getAverageScore";
const Dashboard = () => {
  const avgMark = 80;
  return (
    <>
      <div className="flex flex-wrap max-w-[500px]  items-center justify-between bg-white rounded-xl">
        <div className="flex flex-col max-sm:w-full sm:w-[50%] h-[300px] p-6 bg-[#7857ff] rounded-xl text-white text-center ">
          <p className="text-gray-300">Your Result</p>
          <div className="py-10 text-xs text-gray-300">
            <span className="text-white text-2xl font-bold rounded-full p-6 border-2 border-blue-800 bg-blue-800">
              <GetAverageScore />
            </span>
            <br />
            of 100
          </div>
          <p>Great</p>
          <p className="text-gray-300 text-xs py-4">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="flex flex-col max-sm:w-full sm:w-[50%] h-[300px] p-6 bg-white rounded-xl text-gray-800 justify-between">
          <p className="text-gray-800 font-bold">Summary</p>
          <GetPersonalData />
          <button className="bg-blue-950 text-white rounded-3xl p-2 hover:bg-[#4e21ca]">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
