"use client";
import cn from "@/lib/cn";
import React, { useEffect, useState } from "react";
import BaseButton from "@/ui/base/BaseButton";
import { usePathname, useRouter } from "next/navigation";

interface BaseMenuProps {
  title: string;
  linkPath: string;
  className?: string;
}

export default function BaseMenu({
  title,
  linkPath,
  className,
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
          ? "bg-[#FCFDC73F] border-[#FCFC03]"
          : "bg-[#11140C] border-[#404833]"
      )}
    >
      <div
        className={cn(
          "w-[56px] h-[56px] rounded-full",
          activeButton ? "bg-[#FCFC03]" : "bg-[#404833]"
        )}
      ></div>
      <div
        className={cn(
          "font-geomGraphic text-base font-semibold mt-[10px]",
          activeButton ? "text-[#FCFC03]" : "text-[#404833]"
        )}
      >
        {title}
      </div>
    </BaseButton>
  );
}
