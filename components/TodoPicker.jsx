import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const TodoPicker = ({ progress, taskId }) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const { totalTask, setTotalTask, setTodoState } = useCustomProjectContext();
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input) {
      const newTodo = {
        id: Date.now(),
        text: input,
        subText: [],
      };
      setTotalTask((prev) => {
        const updatedTasks = prev[progress].addedTask.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              todo: [...task.todo, newTodo],
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

  return (
    <div
      className={` absolute min-w-64 md:right-0 -bottom-28 shadow-2xl  max-w-96  text-sm rounded-sm ${
        currentTheme === "dark" ? "bg-[#4b515e]" : "bg-white border "
      }`}
    >
      <div className="py-2 border-b px-4 flex justify-between">
        <h1 className="">Todo</h1>
        <h1
          onClick={() => setTodoState(false)}
          className="cursor-pointer hover:text-red-400"
        >
          X
        </h1>
      </div>

      <div className="my-4 px-3">
        <input
          type="text"
          className="w-full border px-2 py-2 rounded-sm"
          placeholder="Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Button
          onClick={addTodo}
          className="w-full rounded-sm mt-4 cursor-pointer"
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default TodoPicker;
