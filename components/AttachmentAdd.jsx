import { useCustomProjectContext } from "@/context/AddCustomizeProjectContext";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MdAttachment } from "react-icons/md";

const AttachmentAdd = ({ progress, taskId }) => {
  const { totalTask, delAttachmentIndex, setDelAttachmentIndex,setTotalTask } =
    useCustomProjectContext();
  const attachment = totalTask[progress].addedTask.find(
    (task) => task.id === taskId
  )?.attachment;

  const deleteAttachment = (indexToDelete)=>{
    setTotalTask((prev)=>{

        const updatedTasks = prev[progress].addedTask.map((task) => {
          if (task.id === taskId) {
            const updatedAttachment = task.attachment.filter(
              (_, index) => index !== indexToDelete
            );
            return {
              ...task,
              attachment: updatedAttachment,
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
      })
  }
  return (
    <div>
      {attachment.length > 0 && (
        <div className="mt-12">
          <div className="flex gap-1.5 items-center">
            <MdAttachment className="h-7 w-7 -rotate-40" />
            <h1 className="text-lg font-bold">Attachments</h1>
          </div>
          {attachment.map((singleAttachment, index) => (
            <div
              key={index}
              className="flex justify-between items-center"
              onMouseEnter={() => setDelAttachmentIndex(index)}
              onMouseLeave={() => setDelAttachmentIndex(null)}
            >
              <div className="mt-4 flex gap-5 items-center">
                <Image
                  src={singleAttachment.src}
                  height={100}
                  width={100}
                  alt="attachment photo"
                  className="rounded-md"

                />
                <h1 className="text-sm font-semibold">{singleAttachment.name}</h1>
              </div>
              {delAttachmentIndex === index && (
                <div className="pr-2">
                  <Trash2 className="text-red-400 cursor-pointer h-5 w-5" onClick={() => deleteAttachment(index)}/>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttachmentAdd;
