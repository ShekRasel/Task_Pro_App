"use client";
import { Plus, Trash2 } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

import { useTheme } from "next-themes";

const Todo = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [todos, setTodos] = useState([
    "Write Unit Tests",
    "Organize Your Codebase",
    "Update Your Portfolio",
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [noteValue, setNoteValue] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isAdding && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAdding]);

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && noteValue.trim()) {
      setTodos([...todos, noteValue.trim()]);
      setNoteValue("");
      setIsAdding(false);
    } else if (e.key === "Escape") {
      setNoteValue("");
      setIsAdding(false);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div
      className={`w-full md:w-1/2 py-4 pl-4  rounded-md ${
        currentTheme === "dark" ? "bg-[#373B43]" : "bg-white border"
      }`}
    >
      <h1
        onClick={() => setIsAdding(true)}
        className="flex gap-2 border-b pb-2 cursor-pointer"
      >
        Todo
        <Plus className="rounded-full p-1" />
      </h1>

      <div className="mt-7">
        {todos.length > 0 || isAdding ? (
          <div className="mt-4 overflow-y-scroll h-64 pr-2 flex flex-col gap-2">
            {todos.map((todo, index) => (
              <div
                key={index}
                className="flex justify-between items-center gap-4 text-sm py-2 px-2 rounded-md hover:bg-gray-100 hover:text-black"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex w-full items-center gap-2">
                  <input type="checkbox" />
                  <p className="w-full">{todo}</p>
                </div>
                {hoveredIndex === index && (
                  <Trash2
                    className="cursor-pointer "
                    onClick={() => deleteTodo(index)}
                  />
                )}
              </div>
            ))}

            {/* New Input Row */}
            {isAdding && (
              <div className="flex items-center gap-2 text-sm py-2 px-2 rounded-md ">
                <input type="checkbox" disabled />
                <input
                  ref={inputRef}
                  type="text"
                  value={noteValue}
                  onChange={(e) => setNoteValue(e.target.value)}
                  onKeyDown={handleAddTodo}
                  placeholder="Add Note"
                  className="w-full px-2 py-1 rounded border "
                />
              </div>
            )}
          </div>
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center h-64 gap-2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={"/images/empty.svg"}
              height={100}
              width={100}
              alt="No data"
            />
            <h1 className="text-md">No data Found</h1>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Todo;
