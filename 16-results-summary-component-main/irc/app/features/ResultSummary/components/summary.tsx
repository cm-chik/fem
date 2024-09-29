import { ICategory } from "@/app/interfaces";
import useFetchCategories from "../hooks/UseFetchCategories";
import SummaryIcon from "./summaryIcon";
import SummaryContainer from "./summaryContainer";
import SummaryCategory from "./summaryCategory";
import SummaryScore from "./summaryScore";
import ContinueButton from "./continueButton";

const Summary = () => {
  const { data, isLoading, error } = useFetchCategories();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error </div>;

  return (
    <div className="flex flex-col max-sm:w-full sm:w-[50%] h-[300px] p-6 bg-white rounded-xl text-gray-800 justify-between">
      <p>Summary</p>
      {data.message.map((item: ICategory) => (
        <div key={item.category} className="flex justify-between">
          <SummaryContainer category={item.category}>
            <div className="flex justify-between gap-2">
              <SummaryIcon iconImage={item.icon} />
              <SummaryCategory category={item.category} />
            </div>
            <SummaryScore score={item.score} />
          </SummaryContainer>
        </div>
      ))}

      <ContinueButton />
    </div>
  );
};

export default Summary;
