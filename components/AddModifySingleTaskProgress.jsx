import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ListTodo, MessageSquare, Tag, Timer, Trash, X } from "lucide-react";
import { MdAttachment, MdOutlinePerson } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import Image from "next/image";
import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import { useState } from "react";
import { Button } from "./ui/button";
import TaskComments from "./TaskComments";

const AddModifySingleTaskProgress = ({ task, progress }) => {
  const {
    taskTimeLine,
    setTaskTimeLine,
    showInput,
    setShowInput,
    saveTask,
    SetSaveTask,
    inputValue,
    setInputValue,
    totalTask,
    setTotalTask,
    allTaskTimeLine,
  } = useCustomProjectContext();


  const ModificationButton = [
    { icon: <MdOutlinePerson className="h-5 w-5" />, Name: "Members" },
    { icon: <Tag className="h-5 w-5" />, Name: "Tags" },
    { icon: <Timer className="h-5 w-5" />, Name: "Date" },
    { icon: <MdAttachment className="h-5 w-5" />, Name: "Attachment" },
    { icon: <ListTodo className="h-5 w-5" />, Name: "Todo List" },
    { icon: <Trash className="h-5 w-5" />, Name: "Delete" },
  ];

  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-[#464C59] py-2 text-white rounded-md cursor-pointer px-4">
          <h1>{task}</h1>
        </div>
      </DialogTrigger>
      <DialogContent className="md:min-w-3xl lg:min-w-4xl">
        <DialogHeader>
          <DialogTitle>{task}</DialogTitle>
        </DialogHeader>
        <div className=" border-r-blue-600 flex flex-col md:flex-row justify-between gap-4 lg:gap-8">
          <div className=" w-full ">
            <div></div>
            <div></div>

            <div>
              <div className="flex items-center gap-2 text-lg">
                <FaBarsStaggered />
                <h1 className="font-semibold">Description</h1>
              </div>
              <textarea
                className="bg-[#464C59]  min-h-34 mt-3 rounded-sm focus:outline-none focus:ring-1  focus:ring-blue-400 px-4 py-4 text-white  w-full"
                placeholder="Add a description ...."
              ></textarea>
            </div>
            {/* comments area */}
            <TaskComments progress={progress}/>
          </div>

          <div className="flex flex-col gap-6">
            {ModificationButton.map((button, index) => (
              <h1
                key={index}
                className="flex gap-2 py-1 items-center px-2 rounded-sm bg-[#464C59] text-white text-sm "
              >
                <span>{button.icon}</span> <span>{button.Name}</span>
              </h1>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddModifySingleTaskProgress;
