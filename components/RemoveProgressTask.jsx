import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import { ListTodo, Tag, Timer, Trash } from "lucide-react";
import React, { useState } from "react";
import { MdAttachment, MdOutlinePerson } from "react-icons/md";
import { Button } from "./ui/button";
import Date from "./DatePicker";
import DatePicker from "./DatePicker";
import TagPicker from "./TagPicker";

const RemoveProgressTask = ({ progress, taskId }) => {
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
    setProjectDate,
    setDateState,
    setTagState,
    tagState,
    dateState

  } = useCustomProjectContext();

  const ModificationButton = [
    { icon: <MdOutlinePerson className="h-5 w-5" />, Name: "Members", id: 1 },
    { icon: <Tag className="h-5 w-5" />, Name: "Tags", id: 2 },
    { icon: <Timer className="h-5 w-5" />, Name: "Date", id: 3 },
    { icon: <MdAttachment className="h-5 w-5" />, Name: "Attachment", id: 4 },
    { icon: <ListTodo className="h-5 w-5" />, Name: "Todo List", id: 5 },
    { icon: <Trash className="h-5 w-5" />, Name: "Delete", id: 6 },
  ];

  const modifyPerProgressTask = (id, index) => {
    switch (id) {
      case 2:
        setTagState(true);
        break;
      case 3:
        setDateState(true);
        break;
      case 6:
        deletePerProgressTask();
    }
  };

  const deletePerProgressTask = () => {
    const afterDeleteTask = totalTask[progress].addedTask.filter(
      (perSingleTask) => {
        return perSingleTask.id !== taskId;
      }
    );

    setTotalTask((prev) => ({
      ...prev,
      [progress]: {
        ...prev[progress],
        addedTask: afterDeleteTask,
      },
    }));
  };
  return (
    <div className="flex flex-col gap-6 relative">

      {/* choose tags */}
      {tagState && <TagPicker progress={progress} taskId={taskId}/>}
      {/* choose date */}
      {dateState && <DatePicker  progress={progress} taskId={taskId}/>}

      {ModificationButton.map((button, index) => (
        <h1
          key={index}
          className="flex gap-2 py-1 items-center px-2 rounded-sm bg-[#464C59] text-white text-sm cursor-pointer"
          onClick={() => modifyPerProgressTask(button.id, index)}
        >
          <span>{button.icon}</span> <span>{button.Name}</span>
        </h1>
      ))}
    </div>
  );
};

export default RemoveProgressTask;
