import cn from "@/lib/cn";
import React from "react";
import Image from "next/image";
import logo from "@/assets/Icon/logo.webp";

interface BaseProfileProps {
  className?: string;
  profileName: string;
}

export default function BaseProfile({
  className,
  profileName,
}: BaseProfileProps) {
  return (
    <div className={cn(className, "flex flex-row items-center")}>
      {/* <div className="w-[90px] h-[90px] bg-[#FCFC03] rounded-full"></div> */}
      <Image
        src={logo}
        alt={"logo"}
        className="w-[56px] h-[56px] rounded-full border-[2px] border-[#FCFC03]"
      />
      <div className="ml-[32px] text-[48px] font-geomGraphic font-bold text-[#FCFC03]">
        {profileName}
      </div>
    </div>
  );
}
