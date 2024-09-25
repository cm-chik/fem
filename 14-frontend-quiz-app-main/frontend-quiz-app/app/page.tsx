import QuizData from "./components/getQuiz";
import DarkTheme from "./darktheme";
export default function Home() {
  return (
    <div>
      <DarkTheme />
      <div className="flex flex-wrap items-center justify-center space-x-2">
        <div className="text-3xl">
          Welcome to the <b>Frontend Quiz!</b>
          <p className="text-xs italic">Pick a subject to get started.</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <QuizData />
        </div>
      </div>
    </div>
  );
}
