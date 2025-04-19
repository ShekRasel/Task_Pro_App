"use client";
import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { projects } from "@/projectData/projects";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import FileUploader from "./FileUploader";
import { useAddProjectContext } from "@/context/AddProjectContext";

const AddProject = () => {
  const {
    projectName,
    totalProject,
    setTotalProject,
    setProjectName,
    projectDate,
    setProjectDate,
    projectLogo,
    setProjectLogo,
    projectMember,
    setProjectMember,
    projectMemberPhoto,
    setProjectMemberPhoto,
  } = useAddProjectContext();
  const [input, setInput] = useState("");
  const [date, setDate] = useState(null);
  const [member, setMember] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    input && setProjectName(input);
    date && setProjectDate(date);
    member && setProjectMember(member);
  }, [date, member, input]);

  //  useEffect(()=>{
  //   setOpenDialog(true);
  //  },[openDialog])

  const addProject = () => {
    const newProjectData = {
      id: projects.length + totalProject.length + 1,
      date: projectDate,
      logo: projectLogo,
      projectName: projectName,
      members: [
        {
          photo: "/images/person6.jpg",
          name: projectMember,
        },
      ],
    };

    setTotalProject((prev) => [...prev, newProjectData]);
    setDate("");
    setInput("");
    setMember("");
    setOpenDialog(false);
  };
  return (
    <Dialog className="" open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger className="border w-full md:w-1/2 h-44 rounded-md">
        <div className=" cursor-pointer gap-4 flex flex-col items-center justify-center">
          <Plus className="rounded-full w-8 h-8  flex items-center justify-center border-3 p-1" />
          <h1 className="font-semibold text-xl">New Project</h1>
        </div>
      </DialogTrigger>

      <DialogContent className="w-4/5  border">
        <DialogTitle className="border-b pb-4">New Project</DialogTitle>
        <div className="flex justify-center">
          <FileUploader />
        </div>
        <div className="px-2 mt-4">
          <input
            type="text"
            placeholder="Project Name"
            className="px-1.5 py-1.5 w-full border outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Members"
            className="px-1.5 py-1.5 w-full mt-8 border outline-none"
            value={member}
            onChange={(e) => setMember(e.target.value)}
          />
          <input
            type="date"
            name=""
            className="mt-8 border w-full py-2 px-2"
            id=""
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <Button className="right-0  mt-7" onClick={addProject}>
          Create
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddProject;
