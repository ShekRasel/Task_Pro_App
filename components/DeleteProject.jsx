"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { toast } from "sonner"

const DeleteProject = ({ projectId, updatedProjects, setUpdatedProjects }) => {
  const deleteSingleProject = () => {
    const afterDeleteProjects = updatedProjects.filter((deleteProject) => {
      return deleteProject.id !== projectId;
    });
    setUpdatedProjects(afterDeleteProjects);
    toast.success('Project Delete successfully!', {
      style : {
        color: 'green'
      }
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" border-none outline-none focus:outline-none focus:ring-0 cursor-pointer">
        ...
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-transparent border-none shadow-none">
        <div className=" bg-white border text-black rounded-md mt-2 py-2 mr-7 md:mr-22">
          <DropdownMenuItem className="px-10">Archieve</DropdownMenuItem>
          <DropdownMenuItem
            className="px-10"
            onClick={(e) => {
              e.stopPropagation(); 
              e.preventDefault(); 
              deleteSingleProject();
            }}
          >
            Delete
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DeleteProject;
