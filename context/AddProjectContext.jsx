'use client'
import React, { createContext, useContext, useState } from 'react'

const projectContext = createContext();


const AddProjectContext = ({children}) => {
const [projectName,setProjectName] = useState('');
const [data, setDate] = useState(null);
const[projectLogo,setProjectLogo] = useState(null);
const[projectMember,setProjectMember] = useState('');
const[projectMemberPhoto,setProjectMemberPhoto] = useState(null);
  return (
    <projectContext.Provider value={{projectName,setProjectName,data,setDate,projectLogo,setProjectLogo,projectMember,setProjectMember,projectMemberPhoto,setProjectMemberPhoto}}>
        {children}
    </projectContext.Provider>
  )
}

export default AddProjectContext

export const useAddProjectContext = ()=> useContext(projectContext);