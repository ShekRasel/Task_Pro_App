"use client";
import { progress } from "motion";
import React from "react";

import { useTheme } from "next-themes";
const DashboardInfo = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const infos = [
    { task: "Total Projects", total: "35", progress: "67" },
    { task: "Todo Tasks", total: "27", progress: "35" },
    { task: "Done Tasks", total: "15", progress: "65" },
    { task: "Total Members", total: "35" },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {infos.map((info, index) => (
        <div
          className={`flex justify-between rounded-md p-3  items-center ${
            currentTheme === "dark" ? "bg-[#373B43]" : "bg-white border"
          }`}
          key={index}
        >
          <div>
            <h1 className="font-semibold">{info.task}</h1>
            <h2 className="text-lg font-bold lg:mt-2">{info.total}</h2>
          </div>
          <h1
            className={`${
              info.progress &&
              "rounded-full p-2 text-blue-400 border-2 border-blue-400 h-10 w-10 flex items-center justify-center"
            }`}
          >
            {info.progress}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default DashboardInfo;
