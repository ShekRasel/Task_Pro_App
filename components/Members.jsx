import Image from "next/image";
import React from "react";

const Members = () => {
  return (
    <div className="flex gap-1">
      <Image
        src={"/images/person1.jpg"}
        height={500}
        width={500}
        alt="logo"
        className="rounded-full h-5 w-5  cursor-pointer"
      />

      <Image
        src={"/images/person2.jpg"}
        height={500}
        width={500}
        alt="logo"
        className="rounded-full h-5 w-5  cursor-pointer"
      />

      <Image
        src={"/images/person3.jpg"}
        height={500}
        width={500}
        alt="logo"
        className="rounded-full h-5 w-5  cursor-pointer"
      />
    </div>
  );
};

export default Members;
