'use client'
import { RiSettings3Fill } from "react-icons/ri";
import { BiSolidMessage } from "react-icons/bi";
import { HiMiniHome } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useTheme } from 'next-themes';
import { PiFilesFill } from "react-icons/pi";
const Sidebar = () => {
  const pathName = usePathname();
  const { theme } = useTheme();

  const pages = [
    { link: "/", name: "Dashboard", icon: <HiMiniHome className="w-5 h-5"/> },
    { link: "/project", name: "Projects", icon: <PiFilesFill className="w-5 h-5"/> },
    { link: "/message", name: "Messages", icon: <BiSolidMessage className="w-5 h-5"/> },
    { link: "/settings", name: "Settings", icon:<RiSettings3Fill className="w-5 h-5"/>},
  ];
  return <div className={` md:py-9 px-2 md:p-6 ${theme === 'dark' ? 'bg-[#373B43]' : 'bg-white'}`}>
    <div className="flex gap-2 py-5 md:py-0 items-center justify-center lg:justify-start">
      <Image src={'/logo/logo1.svg'} height={44} width={44} alt="logo" className="h-8 w-8 md:h-12 md:w-12"/>
      <h1 className="text-3xl hidden  lg:block">TaskPro</h1>
    </div>
    <div className="mt-15 flex flex-col gap-10">
      {pages.map((page,index)=>(
        <div key={index} className="text">
          <Link href={page.link} className="flex gap-2 justify-center items-center lg:justify-start font-semibold">
          <span className={`${pathName === page.link && 'text-blue-500'}`}>{page.icon}</span>
          <h1 className={`hidden lg:block ${pathName === page.link && 'text-blue-500'}`}>{page.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  </div>;
};

export default Sidebar;
