"use client";
import { PlusSquare, X } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import TaskAddInput from "./TaskAddInput";
import DeleteProgressTask from "./DeleteProgressTask";
import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";

const TaskProgress = () => {
  const {
    taskTimeLine,
    setTaskTimeLine,
    showInput,
    setShowInput,
    SetSaveTask,
    inputValue,
    setInputValue,
    setTotalTask,
    allTaskTimeLine,
  } = useCustomProjectContext();

  const addTaskPerProgress = (progress) => {
    const newTask = {
      id: Date.now(),
      task: inputValue,
      comments: [],
      descriptions: [],
    };
    setTotalTask((prev) => ({
      ...prev,
      [progress]: {
        addedTask: [...prev[progress].addedTask, newTask],
      },
    }));
    setInputValue("");
    SetSaveTask(true);
  };

  useEffect(() => {
    setTaskTimeLine(allTaskTimeLine);
  }, []);

  return (
    <div className=" overflow-y-scroll overflow-x-scroll py-2 items-start flex gap-4">
      {taskTimeLine.map((singleTask, index) => (
        <div
          key={index}
          className="border border-blue-500 min-w-72  lg:min-w-[350px] overflow-x-auto p-3 rounded-md flex flex-col max-h-[80vh]"
        >
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <h1
                className={`${singleTask.progressColor} h-3 w-3 rounded-full`}
              ></h1>
              <h1>{singleTask.progress}</h1>
            </div>
            <DeleteProgressTask singleTask={singleTask} />
          </div>

          <div className="py" />

          {/* after clicking add task show the input  */}

          <div className="w-full ">
          <TaskAddInput index={index} progress={singleTask.progress} />
          </div>

          {/* click to add task */}

          {showInput === index ? (
            <div className="w-full flex gap-4 mt-4 items-center">
              <Button
                className="bg-blue-500 rounded-sm cursor-pointer hover:bg-blue-400 text-white"
                onClick={() => {
                  setShowInput(null);
                  addTaskPerProgress(singleTask.progress);
                }}
              >
                Add Task
              </Button>
              <X
                className="cursor-pointer"
                onClick={() => setShowInput(null)}
              />
            </div>
          ) : (
            <div
              className=" flex justify-center gap-1.5 text-gray-500 py-6 cursor-pointer"
              onClick={() => setShowInput(index)}
            >
              <PlusSquare />
              <h1 className="font-semibold"> New Task</h1>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskProgress;
