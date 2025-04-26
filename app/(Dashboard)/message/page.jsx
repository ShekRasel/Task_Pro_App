"use client";
import { FaBarsStaggered } from "react-icons/fa6";
import { AlignRightIcon, Link, PlusCircle } from "lucide-react";
import { useTheme } from 'next-themes';
import React, { useEffect, useMemo, useState, useRef } from "react";
import { FiSend } from "react-icons/fi";
const massage = () => {
  const [messages, setMessage] = useState([]);
  const [text, setText] = useState("");
  const messageEndRef = useRef(null);
  const [time, setTime] = useState(null);
  const { theme } = useTheme();


  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const times = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12
    hours = hours.toString().padStart(2, "0");

    const timeWithAmPm = `${hours}:${minutes} ${ampm}`;
    return timeWithAmPm;
  };

  useEffect(() => {
    const time = times();
    setTime(time);
  }, []);

  const handleMassage = () => {
    const ourMessages = {
      text: text,
      time: times(),
    };

    setMessage((prev) => [...prev, ourMessages]);
    setText("");
    setTimeout(scrollToBottom, 100);
  };

  return (
    <div className={`w-full rounded-md  pb-5 md:pb-0 md:h-2/3 mt-2 flex flex-col md:flex-row gap-4 md:gap-0  ${theme === 'dark' ? 'bg-[#373B43]' : 'bg-white '}`}>
      <div className=" md:border-r md:w-2/6  ">
        <div className="flex justify-between px-3 py-5 border-b items-center">
          <h1 className="text-lg">Message</h1>
          <PlusCircle />
        </div>

        <div className="flex gap-2  px-3 border-b py-6">
          <div className="text-xl border rounded-full flex items-center justify-center bg-gray-200 p-1.5 h-11 w-12 text-black">
            E
          </div>
          <div className="flex justify-between  w-full">
            <div>
              <h1 className="text-blue-400 text-lg">Eric</h1>
              <h1 className="text-sm">Hi there</h1>
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className="text-[12px]">3 year ago</h1>
              <div className="flex justify-end items-center">
                <span className=" flex items-center justify-center border bg-blue-400 h-7 w-7  rounded-full text-white">
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2  px-3 border-b py-6">
          <div className="text-xl border rounded-full flex items-center justify-center bg-gray-200 p-1.5 h-11 w-12 text-black">
            N
          </div>
          <div className="flex justify-between  w-full">
            <div>
              <h1 className="text-blue-400 text-lg">Nafiz</h1>
              <h1 className="text-sm">How about you ? </h1>
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className="text-[12px]">3 year ago</h1>
              <div className="flex justify-end items-center">
                <span className=" flex items-center justify-center h-4 w-4  rounded-full ">
                  <AlignRightIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  w-full md:w-4/6 h-full  flex flex-col justify-between  border-t md:border-none gap-8 ">

        <div className=" w-full h-full ">
          <div className="border-b flex px-3 py-5 items-center gap-4">
            <FaBarsStaggered className="md:hidden" />
            <h1 className="  text-lg font-semibold">conversation</h1>
          </div>

          <div className="w-full h-[420px]  overflow-y-scroll   p-2 ">
            {/* Left-aligned (User message) */}
            <div className="flex gap-2 h-20 w-full  relative mb-4">
              <div className="flex justify-start absolute top-10">
                <h1 className="border p-4 rounded-full h-10 w-10 items-center justify-center flex bg-blue-400 text-white">
                  E
                </h1>
              </div>
              <div className="border px-6 py-2 text-black absolute left-12 rounded-tl-xl rounded-r-3xl bg-gray-100">
                <h1>Hi there</h1>
                {time && <h2 className="text-[12px] mt-1">{time}</h2>}
              </div>
            </div>

            {/* Right-aligned (Your message) */}

            <div>
              {messages.map((message, index) => (
                <div
                  className="flex gap-2 h-20 w-full relative mb-4 justify-end"
                  key={index}
                >
                  <div className="border px-6 py-2 absolute right-0 rounded-tr-xl rounded-l-3xl bg-blue-400 text-white">
                    <h1>{message.text}</h1>
                    <h2 className="text-[12px] mt-1 text-right">
                      {message.time}
                    </h2>
                  </div>
                </div>
              ))}
              <div ref={messageEndRef} />
            </div>
          </div>
        </div>

        {/* Message input */}
        <div className="px-2 md:px-6">
          <div className="w-full rounded-full  border py-1 flex px-3 pr-5">
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleMassage();
                }
              }}
            />
            <div className="flex gap-4 items-center">
              <Link className="h-4 w-4" />
              <FiSend onClick={handleMassage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default massage;
