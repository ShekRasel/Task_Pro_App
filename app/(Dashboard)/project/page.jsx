import AddProject from "@/components/AddProject";
import Projects from "@/components/Projects";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="mb-8 flex items-center justify-center">
        <AddProject />
      </div>
      <Projects />
    </div>
  );
};

export default page;
