import TaskProgress from "@/components/TaskProgress";
import AddCustomizeProjectContext from "@/context/AddCustomizeProjectContext";

import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  const page = decodeURIComponent(slug);
  return (
        
    <div className="w-full">
      <h1 className="text-lg font-semibold">{page}</h1>
      <div className="mt-4">
      <AddCustomizeProjectContext>
          <TaskProgress />
      </AddCustomizeProjectContext>
      </div>
    </div>
        
  );
};

export default page;
