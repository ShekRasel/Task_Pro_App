import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import React, { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";

const DatePicker = ({ setDateState, progress, taskId }) => {
  const { setTotalTask } = useCustomProjectContext();
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
    <div className="absolute top-34 md:right-0 bg-white text-black">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="bg-white"
      />
      <div className="flex justify-between">

      <Button
        className="rounded-none bg-white text-black cursor-pointer hover:bg-white border shadow-lg"
        onClick={handleOkClick}
        disabled={!date} // prevent clicking without selecting
      >
       Ok
      </Button>

      <Button className='rounded-none bg-white text-black hover:bg-white cursor-pointer  border shadow-lg ' onClick={()=>setDateState(false)}>
        X
      </Button>
      </div>
    </div>
  );
};

export default DatePicker;
