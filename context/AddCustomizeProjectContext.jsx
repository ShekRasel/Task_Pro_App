"use client";
import React, { createContext, useContext, useState } from "react";
const CustomProjectContext = createContext();

const AddCustomizeProjectContext = ({ children }) => {
  const allTaskTimeLine = [
    {
      progress: "Todo",
      progressColor: "bg-red-500",
    },
    {
      progress: "On Progress",
      progressColor: "bg-blue-500",
    },
    {
      progress: "OnReview",
      progressColor: "bg-yellow-500",
    },
    {
      progress: "Done",
      progressColor: "bg-green-500",
    },
  ];
  const [taskTimeLine, setTaskTimeLine] = useState([]);
  const [showInput, setShowInput] = useState(null);
  const [saveTask, SetSaveTask] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [delMessageIndex, setDelMessageIndex] = useState(null);
  const [messages, setMessages] = useState("");
  const [messageState, setMessageState] = useState(false);
  const [totalTask, setTotalTask] = useState({
    Todo: { addedTask: [] },
    "On Progress": { addedTask: [] },
    OnReview: { addedTask: [] },
    Done: { addedTask: [] }
  });



  return (
    <CustomProjectContext.Provider
      value={{
        taskTimeLine,
        setTaskTimeLine,
        showInput,
        setShowInput,
        saveTask,
        SetSaveTask,
        inputValue,
        setInputValue,
        totalTask,
        setTotalTask,
        allTaskTimeLine,
        delMessageIndex,
        setDelMessageIndex,
        messages,
        setMessages,
        setMessageState,
      }}
    >
      {children}
    </CustomProjectContext.Provider>
  );
};

export default AddCustomizeProjectContext;
export const useCustomProjectContext = () => useContext(CustomProjectContext);
