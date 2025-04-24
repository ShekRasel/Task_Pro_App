import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const TagPicker = ({ progress, taskId }) => {
  const { setTagState, totalTask, setTotalTask } = useCustomProjectContext();
  const [input, setInput] = useState("");
  const [color, setColor] = useState("");

  const addTags = () => {
    if (color && input) {
      const newTags = {
        id: Date.now(),
        text: input,
        color: color,
      };
      setTotalTask((prev) => {
        const updatedTasks = prev[progress].addedTask.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              tags: [...task.tags, newTags],
            };
          }
          return task;
        });

        return {
          ...prev,
          [progress]: {
            addedTask: updatedTasks,
          },
        };
      });

      setInput('')
    } else {
      toast(<h1 className="text-red-400">"Field can't be empty ...."</h1>);
      return;
    }
  };

  const deleteTags = (indexToDelete) => {
    setTotalTask((prev) => {
      const updatedTasks = prev[progress].addedTask.map((task) => {
        if (task.id === taskId) {
          const updatedTags = task.tags.filter(
            (_, index) => index !== indexToDelete
          );
          return {
            ...task,
            tags: updatedTags,
          };
        }
        return task;
      });

      return {
        ...prev,
        [progress]: {
          ...prev[progress],
          addedTask: updatedTasks,
        },
      };
    });
  };
  return (
    <div className=" absolute min-w-72 md:right-0 top-22 shadow-2xl  max-w-96 bg-[#5d616c] text-white text-sm">
      <div className="py-2 border-b px-3 flex justify-between">
      <h1 className="">Tags</h1>
      <h1 onClick={()=>setTagState(false)} className="cursor-pointer">X</h1>
      </div>
      <div className="p-3 flex gap-2 w-full">
        <input
          type="text"
          className="w-full border px-2"
          placeholder="Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          className="border bg-gray-500 px-4"
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="green">green</option>
          <option value="red">red</option>
          <option value="purple">purple</option>
          <option value="gold">gold</option>
        </select>
        <Button onClick={addTags}>Add</Button>
      </div>
      <div className="flex p-2 px-3 gap-4">
        {totalTask[progress].addedTask
          .find((task) => task.id === taskId)
          ?.tags.map((singleTags, index) => (
            <div key={index} className="flex gap-1.5 items-center">

            <h1
              className={`border px-2`}
              style={{
                color: singleTags.color,
                borderColor: singleTags.color,
              }}
            >
              {singleTags.text}
            </h1>
            <h1 className="text-sm cursor-pointer" onClick={()=>deleteTags(index)}>X</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TagPicker;
