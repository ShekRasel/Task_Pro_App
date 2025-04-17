'use client'
import Image from "next/image";
import React from "react";
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

const Profile = () => {
  return (
    <DropdownMenu className="border-none">
      <DropdownMenuTrigger className=" border-none outline-none focus:outline-none focus:ring-0">
        {" "}
        <Image
          src={"/images/profile.jpg"}
          height={500}
          width={500}
          alt="logo"
          className="rounded-full  h-10 w-10  cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" rounded-none bg-transparent shadow-none pr-4 md:pr-10 xl:pr-24 border-none">
        <motion.div
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{duration:0.6, ease:"easeInOut"}}
        className="bg-white shadow-md w-56 py-2 rounded-md px-4">
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
          <DropdownMenuItem className="border-t py-2">
            Dark Mode
          </DropdownMenuItem>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
