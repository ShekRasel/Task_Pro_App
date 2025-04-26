"use client";
import { PlusSquare, X } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import TaskAddInput from "./TaskAddInput";
import DeleteProgressTask from "./DeleteProgressTask";
import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import { useTheme } from 'next-themes';
import { toast } from "sonner"
const TaskProgress = ({projectName}) => {
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
  const { theme } = useTheme();

  const addTaskPerProgress = (progress) => {
    if(inputValue){

      const newTask = {
        id: Date.now(),
        task: inputValue,
        comments: [],
        descriptions: [],
        date : '',
        attachment :[],
        tags : [],
        todo : [],
        member: []
      };
      setTotalTask((prev) => ({
        ...prev,
        [progress]: {
          addedTask: [...prev[progress].addedTask, newTask],
        },
      }));
      setInputValue("");
      SetSaveTask(true);
      setShowInput(null);
      toast.success('Task Added successfully!', {
              style : {
                color: 'green'
              }
            });
    }else{
      toast.warning('field can not be empty....',{
        style: {
          color: "red",
          fontWeight: "bold",
        },
      })
    }
  };

  useEffect(() => {
    setTaskTimeLine(allTaskTimeLine);
  }, []);

  return (
    <div className="overflow-y-scroll grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-5 2xl:gap-10 items-start">
      {taskTimeLine.map((singleTask, index) => (
        <div
          key={index}
          className={` rounded-md shadow-md p-4 h-auto  ${theme === 'dark' ? 'bg-[#373B43]' : 'bg-white'}`}
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
          <TaskAddInput index={index} progress={singleTask.progress} projectName={projectName}/>
          </div>

          {/* click to add task */}

          {showInput === index ? (
            <div className="w-full flex gap-4 mt-4 items-center">
              <Button
                className=" rounded-xs cursor-pointer px-2 py-0"
                onClick={() => {
                 
                  addTaskPerProgress(singleTask.progress);
                }}
              >
                Add Task
              </Button>
              <X
                className="cursor-pointer hover:text-red-400"
                onClick={() => setShowInput(null)}
              />
            </div>
          ) : (
            <div
              className=" flex justify-center gap-1.5  pt-6 cursor-pointer"
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
