import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import { ListTodo, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const TodoAdder = ({ task, progress, taskId }) => {
  const { totalTask, setTotalTask, delTodoIndex, setDelTodoIndex } =
    useCustomProjectContext();

  const [showInput, setShowInput] = useState(null);
  const [input, setInput] = useState("");
  const [subTextIndex, setSubTextIndex] = useState({ todoIndex: null, subIndex: null });

  const todo = totalTask[progress].addedTask.find(
    (task) => task.id === taskId
  )?.todo;

  const todoDelete = (indexToDelete) => {
    setTotalTask((prev) => {
      const updatedTasks = prev[progress].addedTask.map((task) => {
        if (task.id === taskId) {
          const updatedTodo = task.todo.filter(
            (_, index) => index !== indexToDelete
          );
          return {
            ...task,
            todo: updatedTodo,
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

  const addSubTodo = (subIndex) => {
    if (input) {
      setTotalTask((prev) => {
        const updatedTasks = prev[progress].addedTask.map((task) => {
          if (task.id === taskId) {
            const updatedTodos = task.todo.map((subtask, index) => {
              if (subIndex === index) {
                return {
                  ...subtask,
                  subText: [...subtask.subText, input],
                };
              }
              return subtask;
            });

            return {
              ...task,
              todo: updatedTodos,
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
      setShowInput(null);
    } else {
      toast(<h1 className="text-red-400">"Field can't be empty ...."</h1>);
      return;
    }
  };

  const deleteSubTodoText = (todoIndex, subIndexToDelete) => {
    setTotalTask((prev) => {
      const updatedTasks = prev[progress].addedTask.map((task) => {
        if (task.id === taskId) {
          const updatedTodos = task.todo.map((subtask, index) => {
            if (index === todoIndex) {
              const updatedSubText = subtask.subText.filter(
                (_, i) => i !== subIndexToDelete
              );
              return {
                ...subtask,
                subText: updatedSubText,
              };
            }
            return subtask;
          });
  
          return {
            ...task,
            todo: updatedTodos,
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
  };
  

  console.log(totalTask[progress].addedTask[0].todo);

  return (
    <div className="mt-12">
      {todo.length > 0 && (
        <div className="flex flex-col gap-4">
          {todo.map((singleTodo, index) => (
            <div
              className=""
              key={index}
              onMouseEnter={() => setDelTodoIndex(index)}
              onMouseLeave={() => setDelTodoIndex(null)}
            >
              <div className="flex gap-3  items-center">
                <ListTodo className="h-7 w-7" />
                <h1 className="text-lg font-bold">{singleTodo.text}</h1>
                {delTodoIndex === index && (
                  <Trash2
                    className="w-5 cursor-pointer"
                    onClick={() => todoDelete(index)}
                  />
                )}
              </div>

              <div className="">
                {singleTodo.subText.length > 0 && (
                  <div className="flex flex-col gap-2 mt-2">
                    {singleTodo.subText.map((text, subIndex) => (
                      <div
                        className="flex justify-between hover:border items-center py-1 rounded-sm px-2"
                        key={subIndex}
                        onMouseEnter={() => setSubTextIndex({ todoIndex: index, subIndex })}
                        onMouseLeave={() => setSubTextIndex({ todoIndex: null, subIndex: null })}
                      >
                        <div className="flex gap-2.5">
                          <input type="checkbox" name="" id="" />
                          <h1 className="">{text}</h1>
                        </div>
                          {subTextIndex.todoIndex === index && subTextIndex.subIndex === subIndex && (
                          <div>
                            <Trash2  onClick={()=>deleteSubTodoText(index,subIndex)} className="w-5 text-red-400"/>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {showInput === index ? (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="New todo ..."
                      className="w-full border outline-none py-2 px-2 rounded-sm"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <Button onClick={() => addSubTodo(index)} className='rounded-xs py-0 cursor-pointer text-sm'>Add</Button>
                      <h1
                        onClick={() => setShowInput(null)}
                        className="cursor-pointer font-semibold text-sm"
                      >
                        Cencel
                      </h1>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setShowInput(index)} className=" border px-2 py-2 mt-2 cursor-pointer rounded-sm text-xs">
                    New Item
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoAdder;
