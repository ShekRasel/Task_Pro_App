"use client";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import AddProjectContext from "@/context/AddProjectContext";
import { useTheme } from "next-themes";

const layout = ({ children }) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <AddProjectContext>
      <div
        className={`flex h-screen ${
          currentTheme === "dark" ? "bg-[#3D434C]" : "bg-[#ECF2F4]"
        }`}
      >
        <Sidebar />
        <div className="flex flex-col flex-1 md:mt-4 overflow-hidden">
          <Header />
          <main className="flex-1 py-4 overflow-y-auto px-3 md:px-10 xl:px-16 2xl:px-20">
            {children}
          </main>
        </div>
      </div>
    </AddProjectContext>
  );
};

export default layout;
