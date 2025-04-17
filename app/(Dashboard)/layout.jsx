import Sidebar from "@/components/Sidebar";
import React from "react";
import Header from "@/components/Header";

const layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto px-3 md:px-10 bg-[#ECF2F4]  xl:px-66">
          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;
