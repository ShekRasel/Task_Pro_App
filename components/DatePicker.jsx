import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "./ui/button";

const DatePicker = ({ progress, taskId, }) => {
  const { setTotalTask,setDateState } = useCustomProjectContext();
  const [date, setDate] = useState(null);

  const handleOkClick = () => {
    if (!date) return;

    const projectDate = new Date(date).toDateString();

    setTotalTask((prev) => {
      const updatedTasks = prev[progress].addedTask.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            date: projectDate,
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

    setDateState(false);
  };

  return (
    <div className="absolute -top-48 md:top-34 md:right-0 bg-white text-black   shadow-md z-50">
      <ReactDatePicker
        selected={date}
        onChange={(newDate) => setDate(newDate)}
        className="w-full  text-black "
        calendarClassName="bg-white  !border-none shadow-none"
        popperPlacement="top-start"
        inline
      />

      <div className="flex justify-between">
        <Button
          className="rounded-none bg-white text-black cursor-pointer hover:bg-white border  hover:text-green-500"
          onClick={handleOkClick}
          disabled={!date}
        >
          Ok
        </Button>

        <Button
          className="rounded-none bg-white text-black hover:bg-white cursor-pointer border   hover:text-green-500"
          onClick={() => setDateState(false)}
        >
          X
        </Button>
      </div>
    </div>
  );
};

export default DatePicker;
