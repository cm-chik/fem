import Image from "next/image";

async function GetQuiz() {
  const response = await fetch("http://localhost:4000/quizzes");
  return response.json();
}

export default async function QuizData() {
  const quizData = await GetQuiz();
  return (
    <>
      {quizData.map((quizItem) => (
        <div className="rounded-xl w-full ">
          <button key={quizItem.title} className="flex flex-row">
            {quizItem.title}
            <Image
              src={quizItem.icon}
              alt={quizItem.title}
              width={32}
              height={32}
            />
          </button>
        </div>
      ))}
    </>
  );
}
