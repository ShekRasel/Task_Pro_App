import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Button } from "./ui/button";
import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import { PenBoxIcon, Pencil } from "lucide-react";

const DescriptionAddedArea = ({ progress, taskId }) => {
  const { totalTask, setTotalTask } = useCustomProjectContext();
  const [inputVal, setInputVal] = useState("");

  const descriptFinder = totalTask[progress].addedTask.find(
    (task) => task.id === taskId
  );

  const addDescriptions = () => {
    setTotalTask((prev) => {
      const updatedTasks = prev[progress].addedTask.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            descriptions: [inputVal],
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

    setInputVal("");
  };

    const deleteDrescription = () => {
      setTotalTask((prev) => {
        const updatedTasks = prev[progress].addedTask.map((task) => {
          if (task.id === taskId) {
            const updatedDescription =  task.descriptions.length = 0;
            return {
              ...task,
              descriptions: updatedDescription,
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
    <div className="w-full">
      <div className="flex items-center gap-2 text-lg">
        <FaBarsStaggered />
        <h1 className="font-semibold">Description</h1>
      </div>

      <div className=" ">
        {descriptFinder.descriptions.length > 0 ? (
          <div>
            {descriptFinder.descriptions.map((descript, index) => (
              <div
                key={index}
                className=" border   p-2 mt-2 rounded flex justify-between gap-3 "
              >
                <p className="text-sm ">{descript}</p>
                <PenBoxIcon
                  className=" hover:text-green-500 w-5 h-5 cursor-pointer "
                  onClick={deleteDrescription}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className=" mt-2 ">
            <textarea
              className=" min-h-30   rounded-sm focus:outline-none focus:ring-1   px-4 py-4 border w-full"
              placeholder="Add a description ...."
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
            ></textarea>
            <div className="flex justify-end">
              {inputVal && (
                <Button
                  className=" cursor-pointer rounded-xs"
                  onClick={addDescriptions}
                >
                  Add
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionAddedArea;
