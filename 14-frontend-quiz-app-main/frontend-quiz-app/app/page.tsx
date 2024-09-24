"use client";
import IconHtml from "@/public/icon-html.svg";
import IconCSS from "@/public/icon-css.svg";
import IconJavaScript from "@/public/icon-js.svg";
import IconAccessibility from "@/public/icon-accessibility.svg";
import startQuiz from "./startQuiz";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  async function getTitles() {
    return fetch("/data.json")
      .then((res) => res.json())
      .then((data) => data.subjects);
  }

  const subjects = [
    { id: "HTML", name: "HTML", icon: IconHtml },
    { id: "CSS", name: "CSS", icon: IconCSS },
    { id: "JavaScript", name: "JavaScript", icon: IconJavaScript },
    { id: "Accessibility", name: "Accessibility", icon: IconAccessibility },
  ];

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="flex flex-wrap items-center justify-center space-x-2">
        <div className="text-3xl ">
          Welcome to the <b>Frontend Quiz!</b>
          <p className="text-xs italic">Pick a subject to get started.</p>
        </div>
        <div className="">
          {subjects.map((subject) => (
            <button
              key={subject.id}
              className="flex items-center"
              onClick={() => startQuiz(subject.id)}
            >
              <subject.icon />
              {subject.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
