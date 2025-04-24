import { MessageSquare } from "lucide-react";
import React from "react";
import Members from "./Members";

import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";

const ShowTask = ({ task, taskId, progress,hidden,bg ,flex}) => {
  const { totalTask } = useCustomProjectContext();
  const commentsLength =
    totalTask[progress].addedTask.find((task) => task.id === taskId)?.comments
      .length || 0;
  const projectDate = totalTask[progress].addedTask.find(
    (task) => task.id === taskId
  )?.date;
  return (
    <div className={`py-1.5  rounded-md cursor-pointer   w-full  text-white ${bg}`}>
      <h1 className={`text-start font-semibold w-full ${hidden} block`}>{task}</h1>
      <div className={`flex gap-6 items-center mt-2 ${flex}`}>
        <Members />
        <div className="flex gap-3 items-center">
          {projectDate && <h1 className="text-sm font-semibold">{projectDate}</h1>}

          
            <div className="flex gap-0.5 ">
              <MessageSquare className="w-4" />
              <h1 className="font-semibold text-sm">{commentsLength}</h1>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default ShowTask;
