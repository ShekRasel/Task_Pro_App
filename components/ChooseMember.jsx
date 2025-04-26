import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useAddProjectContext } from "@/context/AddProjectContext";
import Image from "next/image";
import { toast } from "sonner";
import { X } from "lucide-react";
import { useTheme } from 'next-themes';

const ChooseMember = ({ projectName, progress, taskId }) => {
    
const { theme } = useTheme();


  const { updatedProjects } = useAddProjectContext();
  const { setMemberState, totalTask, setTotalTask } = useCustomProjectContext();
  const [input, setInput] = useState("");

  const currentProject = updatedProjects.find(
    (project) => project.projectName === projectName
  );
  const members = currentProject?.members || [];

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(input.toLowerCase())
  );

  // Handle member select
  const handleMemberClick = (selectedMember) => {
    setTotalTask((prev) => {
      const updatedProgress = prev[progress]?.addedTask.map((task) => {
        if (task.id === taskId) {
          const alreadyExists = task.member.some(
            (m) => m.name === selectedMember.name
          );
          if (!alreadyExists) {
            return {
              ...task,
              member: [...task.member, selectedMember], // photo and name both stored
            };
          }
        }
        return task;
      });

      return {
        ...prev,
        [progress]: {
          addedTask: updatedProgress,
        },
      };
    });

    toast.success(`${selectedMember.name} added to task!`, {
      style: { color: "green" },
    });

    // Close member select
    setMemberState(false);
  };

  // Handle member delete
  const handleMemberDelete = (memberToDelete) => {
    setTotalTask((prev) => {
      const updatedProgress = prev[progress]?.addedTask.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            member: task.member.filter((m) => m.name !== memberToDelete.name),
          };
        }
        return task;
      });

      return {
        ...prev,
        [progress]: {
          addedTask: updatedProgress,
        },
      };
    });

    toast.success(`${memberToDelete.name} removed!`, {
      style: { color: "red" },
    });
  };

  // Find the current task's members
  const currentTask = totalTask[progress]?.addedTask.find((task) => task.id === taskId);
  const selectedMembers = currentTask?.member || [];

  return (
    <div className={`absolute min-w-64 md:right-0 top-10 shadow-2xl max-w-96  text-sm rounded-sm ${theme === 'dark' ? 'bg-[#4b515e]' : 'bg-white border'}`}>
      <div className="py-2 border-b px-4 flex justify-between">
        <h1 className="">Add Member</h1>
        <h1
          onClick={() => setMemberState(false)}
          className="cursor-pointer hover:text-red-400"
        >
          X
        </h1>
      </div>

      <div className="my-4 px-3">
        {/* search input */}
        <input
          type="text"
          className="w-full border px-2 py-2 rounded-sm "
          placeholder="Search Member"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Show selected members */}
        {selectedMembers.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 ">
            {selectedMembers.map((member, index) => (
              <div
                key={index}
                className="flex items-center  px-2 py-1 rounded-xs gap-2"
              >
                <Image
                  src={member.photo}
                  height={24}
                  width={24}
                  alt={member.name}
                  className="rounded-full object-cover h-5 w-5"
                />
                <span>{member.name}</span>
                <X
                  size={18}
                  className="cursor-pointer w-4 text-red-400"
                  onClick={() => handleMemberDelete(member)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Search results */}
        {input.trim() !== "" && (
          <div className="mt-4 max-h-48 overflow-y-auto space-y-2">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 hover:border rounded-sm cursor-pointer"
                  onClick={() => handleMemberClick(member)}
                >
                  <Image
                    src={member.photo}
                    height={30}
                    width={30}
                    alt={member.name}
                    className="rounded-full object-cover h-5 w-5"
                  />
                  <span>{member.name}</span>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-300 text-xs">
                No member found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseMember;
