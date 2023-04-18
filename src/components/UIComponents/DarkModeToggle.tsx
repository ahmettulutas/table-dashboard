import React, { /*  useState, */ useEffect } from "react";
import { toggleTheme } from "~/store/api/redux/common";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import Sun from "~/assets/icons/sun.svg";
import Moon from "~/assets/icons/moon.svg";
type Props = {
  defaultMode?: "light" | "dark";
};

const DarkModeToggle: React.FC<Props> = () => {
  const isDarkMode = useAppSelector(state => state.common.isDarkTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isDarkMode)
      document.documentElement.classList.add("dark");
    else
      document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <button
      type="button"
      className={`z-[2] p-1 relative inline-flex gap-2 ${isDarkMode ? "bg-gray-500" : "bg-gray-200"} rounded-full shadow-inner transition duration-200 ease-in-out`}
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle dark mode"
    >
      <div className={`flex gap-1 ${!isDarkMode ? "bg-white shadow-md" : ""} rounded-full p-1 transition-colors duration-200 ease-in`}>
        <Sun className="transform text-yellow-500"/>
        <p className="text-xs transition-none">Light</p>
      </div>
      <div className={`flex ${isDarkMode ? "bg-white shadow-md" : ""} rounded-full p-1 transition-colors duration-200 ease-in`}>
        <Moon className={"transform text-yellow-500"}/>
        <p className="text-xs transition-none">Dark</p>
      </div>
    </button>
  );
};

export default DarkModeToggle;
