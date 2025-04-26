import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import { ListTodo, Tag, Timer, Trash } from "lucide-react";
import React, { useRef, useState } from "react";
import { MdAttachment, MdOutlinePerson } from "react-icons/md";
import { Button } from "./ui/button";
import Date from "./DatePicker";
import DatePicker from "./DatePicker";
import TagPicker from "./TagPicker";
import TodoPicker from "./TodoPicker";
import ChooseMember from "./ChooseMember";

const RemoveProgressTask = ({ progress, taskId ,projectName}) => {
  const {
    totalTask,
    setTotalTask,
    setDateState,
    setTagState,
    tagState,
    dateState,
    todoState,
    setTodoState,
    memberState,setMemberState
  } = useCustomProjectContext();

  const fileInputRef = useRef(null);


  const ModificationButton = [
    { icon: <MdOutlinePerson className="h-5 w-5" />, Name: "Members", id: 1 },
    { icon: <Tag className="h-5 w-5" />, Name: "Tags", id: 2 },
    { icon: <Timer className="h-5 w-5" />, Name: "Date", id: 3 },
    { icon: <MdAttachment className="h-5 w-5" />, Name: "Attachment", id: 4 },
    { icon: <ListTodo className="h-5 w-5" />, Name: "Todo List", id: 5 },
    { icon: <Trash className="h-5 w-5 hover:text-red-400" />, Name: "Delete", id: 6 },
  ];

  const modifyPerProgressTask = (id, index) => {
    switch (id) {
      case 1:
        setMemberState(true);
        break
      case 2:
        setTagState(true);
        break;
      case 3:
        setDateState(true);
        break;
      case 4:
        addAttachment();
        break;
        case 5 : 
        setTodoState(true);
        break;
      case 6:
        deletePerProgressTask();
        break;
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

  const addAttachment = () => {

    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTotalTask((prev) => {
          const image = {
            id : crypto.randomUUID(),
            src : reader.result,
            name : file.name,
          }
          const updatedTasks = prev[progress].addedTask.map((task) => {
            if (task.id === taskId) {
              return {
                ...task,
                attachment: [...task.attachment,image],
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
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-6 relative">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleChange}
      />

      {/* member choose */}
      {memberState && <ChooseMember progress={progress} taskId={taskId} projectName={projectName}/>}
      {/* choose tags */}
      {tagState && <TagPicker progress={progress} taskId={taskId} />}
      {/* choose date */}
      {dateState && <DatePicker progress={progress} taskId={taskId} />}
      {/* choose todo */}
      {
        todoState && <TodoPicker progress={progress} taskId={taskId}/>
      }

      {ModificationButton.map((button, index) => (
        <Button
          key={index}
          className="flex gap-2  items-center px-2 rounded-xs    cursor-pointer"
          onClick={() => modifyPerProgressTask(button.id, index)}
        >
          <span>{button.icon}</span> <span>{button.Name}</span>
        </Button>
      ))}
    </div>
  );
};

export default RemoveProgressTask;
