import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useTheme } from "next-themes";
const TagPicker = ({ progress, taskId }) => {
  const { theme } = useTheme();
  const { setTagState, totalTask, setTotalTask } = useCustomProjectContext();
  const [input, setInput] = useState("");
  const [color, setColor] = useState("green");

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

      setInput("");
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
    <div
      className={`" absolute min-w-72 md:right-0 top-22 shadow-2xl  max-w-96 ${
        theme === "dark" ? "bg-[#4b515e]" : "bg-white border"
      } text-sm rounded-sm"`}
    >
      <div className="py-2 border-b px-3 flex justify-between">
        <h1 className="">Tags</h1>
        <h1
          onClick={() => setTagState(false)}
          className="cursor-pointer hover:text-green-500"
        >
          X
        </h1>
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
          className="border text-blue-400 px-4"
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="#D1FAE5">green</option>
          <option value="#FECACA">red</option>
          <option value="#E9D5FF">purple</option>
          <option value="#FEF3C7">gold</option>
          <option value="#E5E7EB">black</option>
          <option value="#BFDBFE">blue</option>
        </select>
        <Button onClick={addTags} className="rounded-xs cursor-pointer">
          Add
        </Button>
      </div>
      <div className="flex p-2 px-3 gap-4">
        {totalTask[progress].addedTask
          .find((task) => task.id === taskId)
          ?.tags.map((singleTags, index) => (
            <div key={index} className="flex gap-1.5 items-center">
              <h1
                className={`border px-2`}
                style={{
                  backgroundColor: singleTags.color,
                  color: "#111",
                  borderColor: singleTags.color,
                }}
              >
                {singleTags.text}
              </h1>
              <h1
                className="text-xs cursor-pointer  hover:text-red-400"
                onClick={() => deleteTags(index)}
              >
                X
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TagPicker;
