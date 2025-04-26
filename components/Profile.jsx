'use client'
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";

const Profile = () => {

  const {setTheme,theme} = useTheme();
  return (
    <DropdownMenu className="border-none">
      <DropdownMenuTrigger className=" border-none outline-none focus:outline-none focus:ring-0">
        {" "}
        <Image
          src={"/images/profile.jpg"}
          height={500}
          width={500}
          alt="logo"
          className="rounded-full h-10 w-10  cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={` rounded-none  shadow-none pr-4 md:pr-10 xl:pr-24 border-none bg-transparent `}>
        <motion.div
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{duration:0.6, ease:"easeInOut"}}
        
        className= {`shadow-md w-56 py-2 rounded-md px-4    ${theme === 'dark' ? 'bg-[#373B43]' : 'bg-white border'}`}>
          <div className="flex flex-col items-center">
            <DropdownMenuLabel>
              {" "}
              <Image
                src={"/images/profile.jpg"}
                height={500}
                width={500}
                alt="logo"
                className="rounded-full  h-10 w-10"
              />
            </DropdownMenuLabel>
            <DropdownMenuLabel>Jhon Doe</DropdownMenuLabel>
          </div>

          <DropdownMenuSeparator />
          <DropdownMenuItem className="py-2">
            <Link href={"/message"}>Messages</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="border-t py-2">
            <Link href={"/settings"}>Profile Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e)=>e.preventDefault()} className="border-t py-2  flex justify-between cursor-pointer">
           
            <h1> Dark Mode</h1>
            <Switch className='cursor-pointer' 
            checked={theme === 'dark'}
            onCheckedChange={(checked)=>{
              setTheme(checked ? 'dark' : 'light')
            }}
            
            />
           
          </DropdownMenuItem>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
