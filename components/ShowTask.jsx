import { MessageSquare } from "lucide-react";
import React from "react";
import Members from "./Members";

import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import Image from "next/image";

const ShowTask = ({
  task,
  taskId,
  progress,
  hidden,
  bg,
  flex,
  order1,
  order2,
}) => {
  const { totalTask } = useCustomProjectContext();

  const commentsLength =
    totalTask[progress].addedTask.find((task) => task.id === taskId)?.comments
      .length || 0;

  const projectDate = totalTask[progress].addedTask.find(
    (task) => task.id === taskId
  )?.date;

  const attachment = totalTask[progress].addedTask.find(
    (task) => task.id === taskId
  )?.attachment;

  return (
    <div
      className={`py-1.5  rounded-md cursor-pointer   w-full  text-white ${bg}`}
    >
      <h1 className={`text-start font-semibold w-full ${hidden} block`}>
        {task}
      </h1>
      <div className="flex flex-col ">
        <div className={`flex py-3 text-sm  gap-2 ${order1}`}>
          {totalTask[progress].addedTask
            .find((task) => task.id === taskId)
            ?.tags.map((singleTags, index) => (
              <h1
                key={index}
                className={`border px-2`}
                style={{
                  color: singleTags.color,
                  borderColor: singleTags.color,
                }}
              >
                {singleTags.text}
              </h1>
            ))}
        </div>
        <div className={`${hidden} mt-4`}>
          {attachment.length > 0 && (
            <Image
              src={attachment[0].src}
              height={100}
              width={100}
              alt="attachment photo"
              className="w-full rounded-md"
            />
          )}
        </div>
        <div className={`flex gap-6 items-center mt-2 ${order2} ${flex}`}>
          <Members />
          <div className="flex gap-3 items-center">
            {projectDate && (
              <h1 className="text-sm font-semibold">{projectDate}</h1>
            )}

            <div className="flex gap-0.5 ">
              <MessageSquare className="w-4" />
              <h1 className="font-semibold text-sm">{commentsLength}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTask;
