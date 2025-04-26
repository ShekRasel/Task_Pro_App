import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import AddModifySingleTaskProgress from "./AddModifySingleTaskProgress";

const TaskAddInput = ({index,progress,projectName}) => {
  const {showInput,saveTask,inputValue,setInputValue,totalTask} = useCustomProjectContext ();
  return (
    <div className="mt-4 w-full">
      {saveTask && totalTask[progress].addedTask.length > 0 && (
        <div className="flex flex-col gap-3.5 w-full">
          {totalTask[progress].addedTask.map((tasks, index) => (
            
           <AddModifySingleTaskProgress key={index} task={tasks.task} progress={progress} taskId={tasks.id} projectName={projectName}/>
          ))}
        </div>
      )}

      
      {showInput === index && (
        <div className="mt-4">
          <input
            type="text"
            className="border outline-none w-full rounded-md py-1.5 px-3"
            placeholder="Type a titile for this task"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TaskAddInput;
