'use client'
import { File, Home, MessageSquareCode, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathName = usePathname();

  const pages = [
    { link: "/", name: "Dashboard", icon: <Home /> },
    { link: "/project", name: "Projects", icon: <File /> },
    { link: "/message", name: "Messages", icon: <MessageSquareCode/> },
    { link: "/settings", name: "Settings", icon: <Settings /> },
  ];
  return <div className="h-screen  border p-6">
    <div className="flex gap-2 items-center justify-center lg:justify-start">
      <Image src={'/logo/logo1.svg'} height={44} width={44} alt="logo"/>
      <h1 className="text-3xl hidden lg:block">TaskPro</h1>
    </div>
    <div className="mt-15 flex flex-col gap-10">
      {pages.map((page,index)=>(
        <div key={index} className="text">
          <Link href={page.link} className="flex gap-2 justify-center lg:justify-start font-semibold">
          <span>{page.icon}</span>
          <h1 className={`hidden lg:block ${pathName === page.link && 'text-blue-600'}`}>{page.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  </div>;
};

export default Sidebar;
