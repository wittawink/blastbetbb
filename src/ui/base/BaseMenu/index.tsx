"use client";
import cn from "@/lib/cn";
import React, { useEffect, useState } from "react";
import BaseButton from "@/ui/base/BaseButton";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

interface BaseMenuProps {
  title: string;
  linkPath: string;
  className?: string;
  icon: any;
}

export default function BaseMenu({
  title,
  linkPath,
  className,
  icon,
}: BaseMenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeButton, setActiveButton] = useState<boolean>(false);
  useEffect(() => {
    if (pathname === linkPath) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [linkPath, pathname]);

  const handleOnClickMenu = () => {
    router.push(linkPath);
  };
  return (
    <BaseButton
      onClick={handleOnClickMenu}
      className={cn(
        className,
        "w-[108px] h-[108px] rounded-[10px] border border-solid  flex flex-col items-center justify-center ",
        activeButton
          ? "bg-[#FCFDC73F] border-[#FCFC03] drop-shadow-[0_0_4px_rgba(255,234,0,0.5)]"
          : "bg-[#11140C] border-[#404833]"
      )}
    >
      <div
        className={cn(
          "w-[56px] h-[56px] rounded-full flex items-center justify-center",
          activeButton
            ? "bg-[#FCFC03] drop-shadow-[0_0_4px_rgba(255,234,0,0.5)]"
            : "bg-[#404833]"
        )}
      >
        <Image src={icon} alt="icon" />
      </div>
      <div
        className={cn(
          "font-geomGraphic text-base font-semibold mt-[10px]",
          activeButton
            ? "text-[#FCFC03] drop-shadow-[0_0_4px_rgba(255,234,0,0.5)]"
            : "text-[#404833]"
        )}
      >
        {title}
      </div>
    </BaseButton>
  );
}
