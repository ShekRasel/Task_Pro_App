'use client'
import React from "react";
import { projects } from "@/projectData/projects";
import Image from "next/image";
import Link from "next/link";
import DeleteProject from "./DeleteProject";
import { useAddProjectContext } from "@/context/AddProjectContext";
const Projects = () => {
const {totalProject} = useAddProjectContext();

const updateTotalProject = [...projects,...totalProject];


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {updateTotalProject.map((project) => (
        <Link key={project.id} href={`/project-details/${project.projectName}`}>
          <div className="w-full border p-4 rounded-md">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{project.date}</span>
              <span className="font-bold">
                <DeleteProject />
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-4 mt-2">
              <Image src={project.logo} height={50} width={50} alt="logo" />
              <h1 className="font-bold rounded-full">{project.projectName}</h1>
              {/* members details */}
              <div className="flex gap-1">
                {project.members.map((member, index) => (
                  <Image
                    key={index}
                    src={member.photo}
                    height={20}
                    width={20}
                    alt="member"
                    className="rounded-full h-7 w-7 "
                  />
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
