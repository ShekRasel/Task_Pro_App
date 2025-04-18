import Sidebar from "@/components/Sidebar";
import React from "react";
import Header from "@/components/Header";

const layout = ({ children }) => {
  
  return (
  
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1 mt-4 overflow-hidden">
          <Header />
          <main className="flex-1 mt-2 overflow-y-auto px-3 md:px-10 xl:px-16 2xl:px-20">
            {children}
          </main>
        </div>
      </div>
    
  );
};

export default layout;
