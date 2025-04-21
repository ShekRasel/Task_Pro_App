'use client'
import { useState } from "react";

const TaskAddInput = ({
  showInput,
  index,
  saveTask,
  totalTask,
  inputValue,
  setInputValue,
  progress
}) => {
  return (
    <div className="mt-4">
      {saveTask && totalTask[progress].length > 0 && (
        <div className="flex flex-col gap-4">
          {totalTask[progress].map((task, index) => (
            <div key={index} className="bg-[#464C59] py-2 text-white rounded-md cursor-pointer px-4">
              <h1>{task}</h1>
            </div>
          ))}
        </div>
      )}

      
      {showInput === index && (
        <div className="mt-4">
          <input
            type="text"
            className="border outline-none w-full rounded-md py-1.5 px-3"
            placeholder="Type a titile for this task"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TaskAddInput;
