"use client";
import React, { createContext, useContext, useState } from "react";

const projectContext = createContext();

const AddProjectContext = ({ children }) => {
    const [totalProject,setTotalProject] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [projectDate, setProjectDate] = useState(null);
  const [projectLogo, setProjectLogo] = useState(null);
  const [projectMember, setProjectMember] = useState("");
  const [projectMemberPhoto, setProjectMemberPhoto] = useState(null);
  return (
    <projectContext.Provider
      value={{
        totalProject,
        setTotalProject,
        projectName,
        setProjectName,
        projectDate,
        setProjectDate,
        projectLogo,
        setProjectLogo,
        projectMember,
        setProjectMember,
        projectMemberPhoto,
        setProjectMemberPhoto,
      }}
    >
      {children}
    </projectContext.Provider>
  );
};

export default AddProjectContext;

export const useAddProjectContext = () => useContext(projectContext);
