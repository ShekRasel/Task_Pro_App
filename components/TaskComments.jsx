import { MessageSquare, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";

const TaskComments = ({ progress, taskId }) => {
  const {
    delMessageIndex,
    setDelMessageIndex,
    messages,
    setMessages,
    totalTask,
    setTotalTask,
    setMessageState,
  } = useCustomProjectContext();

  const commentsDelete = (indexToDelete) => {
    setTotalTask((prev)=>{

      const updatedTasks = prev[progress].addedTask.map((task) => {
        if (task.id === taskId) {
          const updatedComments = task.comments.filter(
            (_, index) => index !== indexToDelete
          );
          return {
            ...task,
            comments: updatedComments,
          };
        }
        return task;
      });
      
      return {
        ...prev,
        [progress]: {
          ...prev[progress],
          addedTask: updatedTasks,
        },
      };
    })
  };

  const commentsAdded = () => {
    const newMessage = {
      id: Date.now(),
      text: messages,
      time: new Date().toLocaleTimeString(),
    };

    setTotalTask((prev) => {
      const updatedTasks = prev[progress].addedTask.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            comments: [...task.comments, newMessage],
          };
        }
        return task;
      });

      return {
        ...prev,
        [progress]: {
          addedTask: updatedTasks,
        },
      };
    });

    setMessages("");
    setMessageState(false);
  };

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2">
        <MessageSquare />
        <h1 className="font-semibold text-lg">Comments</h1>
      </div>
      <div className="flex gap-2 items-center  mt-1">
        <Image
          src={"/images/profile.jpg"}
          height={500}
          width={500}
          alt="logo"
          className="rounded-full h-9 w-9  cursor-pointer"
        />
        <textarea
          className="bg-[#464C59]  rounded-sm focus:outline-none focus:ring-1  focus:ring-blue-400 px-4 py-1.5 text-white text-sm  w-full h-9"
          placeholder="Type a comment ...."
          value={messages}
          onChange={(e) => {
            setMessages(e.target.value);
          }}
        ></textarea>
      </div>
      {messages && (
        <div className="mt-2 flex gap-2 items-center justify-end">
          <Button
            className="bg-blue-400 hover:bg-blue-400 cursor-pointer rounded-none text-white"
            onClick={commentsAdded}
          >
            Add
          </Button>
        </div>
      )}

      {totalTask[progress].addedTask
        .find((task) => task.id === taskId)
        ?.comments.map((singleComment, index) => (
          <div key={index} className="flex gap-2 w-full mt-4">
            <Image
              src={"/images/profile.jpg"}
              height={500}
              width={500}
              alt="logo"
              className="rounded-full h-9 w-9  cursor-pointer"
            />
            <div
              onMouseEnter={() => setDelMessageIndex(index)}
              onMouseLeave={() => setDelMessageIndex(null)}
              className="w-full"
            >
              <div className="flex gap-2.5 w-full justify-between">
                <h1 className="text-sm">Mr Jhon</h1>
                {delMessageIndex === index && (
                  <Trash
                    className="h-4 w-4 text-red-500 cursor-pointer"
                    onClick={() => commentsDelete(index)}
                  />
                )}
              </div>
              <h1 className="bg-[#464C59] px-2 py-1.5 w-full mt-1 text-white">
                {singleComment.text}
              </h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TaskComments;
