import { MessageSquare } from "lucide-react";
import React from "react";
import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import Image from "next/image";
import { useTheme } from "next-themes";

const ShowTask = ({
  task,
  taskId,
  progress,
  hidden,
  bg,
  flex,
  order1,
  order2,
  heightWidth,
}) => {
  const { totalTask } = useCustomProjectContext();
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const taskData = totalTask[progress].addedTask.find(
    (task) => task.id === taskId
  );

  const commentsLength = taskData?.comments.length || 0;
  const projectDate = taskData?.date;
  const attachment = taskData?.attachment || [];
  const members = taskData?.member || [];

  return (
    <div
      className={`py-1.5 rounded-md cursor-pointer w-full ${bg} ${
        currentTheme === "dark" ? "bg-[#464C59]" : "bg-white"
      }`}
    >
      <h1 className={`text-start font-semibold w-full ${hidden} block`}>
        {task}
      </h1>

      <div className="flex flex-col">
        {/* show tags */}
        <div className={`flex py-3 text-sm gap-2 ${order1}`}>
          {taskData?.tags.map((singleTag, index) => (
            <h1
              key={index}
              className="border px-2"
              style={{
                backgroundColor: singleTag.color,
                color: "#111",
                borderColor: singleTag.color,
              }}
            >
              {singleTag.text}
            </h1>
          ))}
        </div>

        {/* show attachment */}
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

        {/* bottom part */}
        <div className={`flex gap-6 items-center mt-2 ${order2} ${flex}`}>
          {/* show added members photos */}
          <div className="flex -space-x-2">
            {members.slice(0, 3).map((member, index) => (
              <Image
                key={index}
                src={member.photo}
                height={32}
                width={32}
                alt={member.name}
                className={`rounded-full object-cover ${heightWidth} border-2`}
              />
            ))}

            {members.length > 3 && (
              <div
                className={`h-8 w-8 flex items-center justify-center rounded-full bg-gray-300 text-black text-xs font-bold border-2`}
              >
                +{members.length - 3}
              </div>
            )}
          </div>

          {/* date + comments */}
          <div className="flex gap-3 items-center">
            {projectDate && (
              <h1 className="text-sm font-semibold">{projectDate}</h1>
            )}
            <div className="flex gap-0.5">
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
