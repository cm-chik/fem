"use client";
import IconHtml from "@/public/icon-html.svg";

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

  const subjects = [
    { id: 1, name: "HTML", icon: { IconHtml } },
    { id: 1 },
    { id: 1 },
    { id: 1 },
  ];

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="flex flex-wrap items-center justify-center space-x-2">
        <div className="text-3xl ">
          Welcome to the <b>Frontend Quiz!</b>
          <p className="text-xs italic">Pick a subject to get started.</p>
        </div>
        <IconHtml />
        <div>HTML CSS</div>
      </div>
    </div>
  );
}
