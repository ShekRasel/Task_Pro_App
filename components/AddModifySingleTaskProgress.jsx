'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TaskComments from "./TaskComments";
import RemoveProgressTask from "./RemoveProgressTask";
import DescriptionAddedArea from "./DescriptionAddedArea";
import Members from "./Members";
import Date from "./DatePicker";
import { MessageSquare } from "lucide-react";
import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import ShowTask from "./ShowTask";
import Image from "next/image";
import { MdAttachment } from "react-icons/md";
import AttachmentAdd from "./AttachmentAdd";
import TodoAdder from "./TodoAdder";
import { useTheme } from 'next-themes';

const AddModifySingleTaskProgress = ({ task, progress, taskId }) => {
  const { theme } = useTheme();
 
  

  return (
    <Dialog >
      <DialogTrigger>
        {/* task will be show */}
        <ShowTask
          task={task}
          progress={progress}
          taskId={taskId}
          block={"block"}
          bg={"px-4 border"}
          flex={"justify-between"}
          order1={"order-1"}
          order2={"order-2"}
        />
      </DialogTrigger>
      <DialogContent className={`md:min-w-3xl h-9/10 md:h-1/2 overflow-y-scroll lg:min-w-4xl md:max-w-4xl  sm:max-w-[500px] ${theme === 'dark' ? 'bg-[#464C59]' : 'bg-white border'}`}>
        <DialogHeader>
          <DialogTitle className="text-start">{task}</DialogTitle>
        </DialogHeader>
        <div className={`flex flex-col md:flex-row justify-between gap-4 lg:gap-8 `}>
          <div className=" md:w-5/6">
            <ShowTask
              task={task}
              progress={progress}
              taskId={taskId}
              hidden={"hidden"}
              bg={" "}
              flex={""}
              order1={"order-2"}
              order2={"order-1"}
            />
            {/* description added area */}
            <div className="w-full mt-2">
              <DescriptionAddedArea progress={progress} taskId={taskId} />
            </div>

            {/* todo adder */}

            <TodoAdder progress={progress} taskId={taskId}/>

            {/* attachment area */}

            <AttachmentAdd progress={progress} taskId={taskId}/>

            {/* comments area */}
            <TaskComments progress={progress} taskId={taskId} />
          </div>

          {/* modification buttons */}
          <div className="md:w-1/6">
            <RemoveProgressTask progress={progress} taskId={taskId} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddModifySingleTaskProgress;
