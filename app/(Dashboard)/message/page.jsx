
import { AlignRightIcon, Link, PlusCircle } from "lucide-react";
import React from "react";
import { FiSend } from "react-icons/fi";
const massage = () => {
  return (
    <div className="w-full border  mt-2 flex min-h-8/12 ">
      <div className="hidden md:block w-2/6  ">
        <div className="flex justify-between px-3 py-5 border-b items-center">
          <h1 className="text-lg">Message</h1>
          <PlusCircle />
        </div>

        <div className="flex gap-2  px-3 border-b py-6">
          <div className="text-xl border rounded-full flex items-center justify-center bg-gray-200 p-1.5 h-11 w-12 text-black">E</div>
          <div className="flex justify-between  w-full">
            <div>
              <h1 className="text-blue-400 text-lg">Eric</h1>
              <h1 className="text-sm">Hi there</h1>
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className="text-[12px]">3 year ago</h1>
              <div className="flex justify-end items-center">

              <span className=" flex items-center justify-center border bg-blue-400 h-7 w-7  rounded-full text-white">3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2  px-3 border-b py-6">
          <div className="text-xl border rounded-full flex items-center justify-center bg-gray-200 p-1.5 h-11 w-12 text-black">N</div>
          <div className="flex justify-between  w-full">
            <div>
              <h1 className="text-blue-400 text-lg">Nafiz</h1>
              <h1 className="text-sm">How about you ? </h1>
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className="text-[12px]">3 year ago</h1>
              <div className="flex justify-end items-center">

              <span className=" flex items-center justify-center h-4 w-4  rounded-full ">
                <AlignRightIcon/>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-4/6 border-l">
        <h1 className="px-3 py-5 border-b text-lg font-semibold">conversation</h1>
        <div className="w-full   h-6/8 overflow-y-scroll p-2">

        </div>
        <div className="px-6 mt-9">
          <div className="w-full  rounded-full border py-1 flex px-3 pr-5">

          <input type="text" className="w-full outline-none" placeholder="Message..."/>
          <div className="flex gap-4 items-center">
            <Link className="h-4 w-4"/>
            <FiSend />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default massage;
