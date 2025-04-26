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
import { useTheme } from "next-themes";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { toast } from "sonner";
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

  const { theme } = useTheme();

  useEffect(() => {
    input && setProjectName(input);
    date && setProjectDate(date);
    member && setProjectMember(member);
  }, [date, member, input]);

  //  useEffect(()=>{
  //   setOpenDialog(true);
  //  },[openDialog])

  const addProject = () => {
    if (input && date && member) {
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
      toast.success('Project Added successfully!', {
                    style : {
                      color: 'green'
                    }
                  });
    } else {
      toast.warning("field can not be empty....", {
        style: {
          color: "red",
          fontWeight: "bold",
        },
      });
    }
  };
  return (
    <Dialog className="" open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger
        className={`w-full md:w-1/2 h-44 rounded-md ${
          theme === "dark" ? "bg-[#373B43]" : "bg-white border"
        }`}
      >
        <div className=" cursor-pointer gap-4 flex flex-col items-center justify-center">
          <BsFillPlusCircleFill className="rounded-full w-8 h-8  flex items-center justify-center border-1 p-1 border-green-400" />
          <h1 className="font-semibold text-xl">New Project</h1>
        </div>
      </DialogTrigger>

      <DialogContent
        className={`w-4/5  border ${
          theme === "dark" ? "bg-[#373B43]" : "bg-white"
        }`}
      >
        <DialogTitle className="border-b pb-4">New Project</DialogTitle>
        <div className="flex justify-center">
          <FileUploader />
        </div>
        <div className="px-2 mt-4">
          <input
            type="text"
            placeholder="Project Name"
            className="px-1.5 py-1.5 w-full border outline-none rounded-xs"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Members"
            className="px-1.5 py-1.5 w-full mt-8 border outline-none rounded-xs"
            value={member}
            onChange={(e) => setMember(e.target.value)}
          />
          <input
            type="date"
            name=""
            className="mt-8 border w-full py-2 px-2 rounded-xs"
            id=""
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <Button className="right-0  mt-7 cursor-pointer" onClick={addProject}>
          Create
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddProject;
