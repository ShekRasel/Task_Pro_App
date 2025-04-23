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

const AddModifySingleTaskProgress = ({ task, progress, taskId }) => {
  
  return (
    
     
    <Dialog className=''>
      <DialogTrigger>
        <div className=" py-1.5  rounded-md cursor-pointer px-4  w-full bg-[#464C59] text-white">
          <h1 className="text-start w-full">{task}</h1>
        </div>
      </DialogTrigger>
      <DialogContent className="md:min-w-3xl lg:min-w-4xl max-w-4xl">
        <DialogHeader>
          <DialogTitle>{task}</DialogTitle>
        </DialogHeader>
        <div className="  flex flex-col md:flex-row justify-between gap-4 lg:gap-8 ">
          <div className=" md:w-5/6">

            <div>
              {/* description added area */}
              <div className="w-full">

              <DescriptionAddedArea progress={progress} taskId={taskId} />
              </div>
            </div>
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
