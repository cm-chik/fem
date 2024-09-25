"use client";
import { useEffect, StrictMode } from "react";

const toggleTheme = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

export default function DarkTheme() {
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}
