import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaBarsStaggered } from "react-icons/fa6";
import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import TaskComments from "./TaskComments";
import RemoveProgressTask from "./RemoveProgressTask";

const AddModifySingleTaskProgress = ({ task, progress,taskId }) => {
  const {
    taskTimeLine,
    setTaskTimeLine,
    showInput,
    setShowInput,
    saveTask,
    SetSaveTask,
    inputValue,
    setInputValue,
    totalTask,
    setTotalTask,
    allTaskTimeLine,
  } = useCustomProjectContext();


  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-[#464C59] py-2 text-white rounded-md cursor-pointer px-4">
          <h1 className="text-start">{task}</h1>
        </div>
      </DialogTrigger>
      <DialogContent className="md:min-w-3xl lg:min-w-4xl">
        <DialogHeader>
          <DialogTitle>{task}</DialogTitle>
        </DialogHeader>
        <div className=" border-r-blue-600 flex flex-col md:flex-row justify-between gap-4 lg:gap-8">
          <div className=" w-full ">
            <div></div>
            <div></div>

            <div>
              <div className="flex items-center gap-2 text-lg">
                <FaBarsStaggered />
                <h1 className="font-semibold">Description</h1>
              </div>
              <textarea
                className="bg-[#464C59]  min-h-34 mt-3 rounded-sm focus:outline-none focus:ring-1  focus:ring-blue-400 px-4 py-4 text-white  w-full"
                placeholder="Add a description ...."
              ></textarea>
            </div>
            {/* comments area */}
            <TaskComments progress={progress} taskId={taskId}/>
          </div>

          {/* modification buttons */}
          <RemoveProgressTask progress={progress} taskId={taskId}/>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddModifySingleTaskProgress;
