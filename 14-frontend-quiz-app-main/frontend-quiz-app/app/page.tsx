"use client";
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
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="bg-white dark:bg-black">
        Welcome to the <b>Frontend Quiz!</b>
        <br />
        Pick a subject to get started.
      </div>
    </div>
  );
}
