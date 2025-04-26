'use client'
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { motion } from "motion/react"

import { useTheme } from 'next-themes';
const Notification = () => {
  const { theme } = useTheme();

  return (
    <DropdownMenu className="border-none">
      <DropdownMenuTrigger className='border-none outline-none focus:outline-none focus:ring-0'>
        <Bell className="border-none cursor-pointer"/>
      </DropdownMenuTrigger>
      

      <DropdownMenuContent className='rounded-none  shadow-none pr-4 md:pr-10 xl:pr-24 border-none py-4 bg-transparent'>
        <motion.div
         initial={{scale:0,opacity:0}}
         animate={{scale:1,opacity:1}}
         transition={{duration:0.6, ease:"easeInOut"}}
        className={` shadow-md w-56 py-2 rounded-md px-4   ${theme === 'dark' ? 'bg-[#373B43]' : 'bg-white border'}`}>
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem className='border-b'> You have been invited to a project.</DropdownMenuItem>
        <DropdownMenuItem>
        Projects updated
        </DropdownMenuItem>
        </motion.div>
      </DropdownMenuContent>
     
    </DropdownMenu>
  );
};

export default Notification;
