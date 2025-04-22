import React from "react";
import { toast } from "sonner"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";

const DeleteProgressTask = ({singleTask}) => {
  const {taskTimeLine,setTaskTimeLine} = useCustomProjectContext ();

  const deleteProgressTask = () => {
    const newProgressTask = taskTimeLine.filter((filterTask) => {
      return filterTask !== singleTask;
    });
    setTaskTimeLine(newProgressTask);
    toast.success('Deleted successfully!', {
        className: 'text-green-600 font-semibold',
      });
  };
  //
  return (
    <DropdownMenu >
      <DropdownMenuTrigger className="border-none outline-none focus:outline-none focus:ring-0 font-bold cursor-pointer">...</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={deleteProgressTask}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DeleteProgressTask;
