"use client";
import React, { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { useAddProjectContext } from "@/context/AddProjectContext";
import Image from "next/image";

export default function FileUploader() {
  const { setProjectLogo } = useAddProjectContext();
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setProjectLogo(reader.result)
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleChange}
      />

      {/* Custom upload div */}
      <div
        className="h-24 w-24 border border-dashed border-blue-300 rounded-full flex flex-col items-center justify-center gap-1 cursor-pointer overflow-hidden"
        onClick={handleClick}
      >
        {image ? (
          <Image
            src={image}
            height={100}
            width={100}
            alt="Uploaded"
            className="object-cover h-full w-full rounded-full"
          />
        ) : (
          <>
            <Plus />
            <h1 className="text-sm font-semibold">Upload</h1>
          </>
        )}
      </div>
    </div>
  );
}
