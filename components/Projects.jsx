"use client";
import React, { useEffect } from "react";
import { projects } from "@/projectData/projects";
import Image from "next/image";
import Link from "next/link";
import DeleteProject from "./DeleteProject";
import { useAddProjectContext } from "@/context/AddProjectContext";
import { useTheme } from "next-themes";
const Projects = () => {
  const { totalProject, updatedProjects, setUpdatedProjects } =
    useAddProjectContext();
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const updateTotalProject = [...projects, ...totalProject];
    setUpdatedProjects(updateTotalProject);
  }, [totalProject]);

  return (
    <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 `}>
      {updatedProjects.map((project) => (
        <Link key={project.id} href={`/project-details/${project.projectName}`}>
          <div
            className={`w-full  p-4 rounded-md ${
              currentTheme === "dark" ? "bg-[#373B43]" : "bg-white border"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{project.date}</span>
              <span className="font-bold">
                <DeleteProject
                  projectId={project.id}
                  updatedProjects={updatedProjects}
                  setUpdatedProjects={setUpdatedProjects}
                />
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-4 mt-2">
              <Image src={project.logo} height={50} width={50} alt="logo" />
              <h1 className="font-bold rounded-full">{project.projectName}</h1>
              {/* members details */}
              <div className="flex gap-1 items-center">
                {project.members.slice(0, 3).map((member, index) => (
                  <Image
                    key={index}
                    src={member.photo}
                    height={20}
                    width={20}
                    alt="member"
                    className="rounded-full h-7 w-7 object-cover"
                  />
                ))}
                {project.members.length > 3 && (
                  <div className="flex items-center justify-center h-7 w-7 rounded-full text-xs font-semibold">
                    +{project.members.length - 3}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
