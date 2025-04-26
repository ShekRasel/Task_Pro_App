"use client";
import { Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "motion/react";


import { useTheme } from 'next-themes';

const Notes = () => {
  const { theme } = useTheme();
  const [note, setNote] = useState(false);
  const [addNote, setAddNote] = useState([
   
  ]);
  const [noteValue, setNoteValue] = useState("");
  const [noteIndex, setNoteIndex] = useState(null);

  const deleteNote = (index) => {
    const upadeNote = addNote.filter((newNote) => {
      return addNote[index] !== newNote;
    });
    setAddNote(upadeNote);
  };

  return (
    <div className={`w-full md:w-1/2 py-4 pl-4   rounded-md ${theme === 'dark' ? 'bg-[#373B43]' : 'bg-white border'}`}>
      <h1
        onClick={() => setNote(true)}
        className="flex gap-2 border-b pb-2 cursor-pointer"
      >
        Notes
        <Plus className=" rounded-full p-1 " />
      </h1>

      <div className="mt-7">
        {note && (
          <div className="flex justify-between pr-4 gap-2">
            <input
              type="text"
              className="border rounded-xs px-2 w-full"
              value={noteValue}
              onChange={(e) => setNoteValue(e.target.value)}
              placeholder="Add Notes ...."
            />
            <Button
              onClick={() => {
                if (noteValue) {
                  setAddNote((prev) => [...prev, noteValue]);
                  setNoteValue("");
                }
              }}
              className="rounded-xs cursor-pointer"
            >
              Add
            </Button>
          </div>
        )}

        {addNote.length > 0 ? (
          <div className="mt-4 overflow-y-scroll h-64 pr-2 flex flex-col gap-4">
            {addNote.map((ourNote, index) => (
              <div
                className="flex justify-between  border-b  py-2 items-center gap-4 text-sm"
                onMouseEnter={() => {
                  setNoteIndex(index);
                }}
                key={index}
              >
                <h1 className=" w-7/8">{ourNote}</h1>

                {noteIndex === index && (
                  <Trash2
                    className="cursor-pointer"
                    onClick={() => deleteNote(index)}
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <motion.div className="flex flex-col items-center justify-center h-64 gap-2" initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1,rotate:360}} transition={{duration:1, ease:"easeInOut"}}>
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

export default Notes;
