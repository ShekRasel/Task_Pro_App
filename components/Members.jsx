import Image from "next/image";
import React from "react";

const Members = () => {
  return (
    <div className="flex gap-1 items-center">
      <Image
        src={"/images/person1.jpg"}
        height={500}
        width={500}
        alt="logo"
        className="rounded-full h-8 w-8  cursor-pointer"
      />

      <Image
        src={"/images/person2.jpg"}
        height={500}
        width={500}
        alt="logo"
        className="rounded-full h-7 w-7  cursor-pointer"
      />

      <Image
        src={"/images/person3.jpg"}
        height={500}
        width={500}
        alt="logo"
        className="rounded-full h-6 w-6  cursor-pointer"
      />
      <h1 className=" text-white">+1</h1>
    </div>
  );
};

export default Members;
