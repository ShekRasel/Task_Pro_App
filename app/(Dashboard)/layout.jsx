'use client'
import Sidebar from "@/components/Sidebar";
import React from "react";
import Header from "@/components/Header";
import AddProjectContext from "@/context/AddProjectContext";
import { useTheme } from 'next-themes';

const layout = ({ children }) => {

  

const { theme } = useTheme();
  
  return (
    <AddProjectContext>

      <div className={`flex h-screen ${theme === 'dark' ? 'bg-[#3D434C]' : 'bg-[#ECF2F4]'}`}>
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
