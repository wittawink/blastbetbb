"use client";
import cn from "@/lib/cn";
import React from "react";
import customInput from "@/styles/custom-input.module.css";
import BaseButton from "../BaseButton";
import { useRouter } from "next/navigation";

interface BannerProps {
  title: string;
  linkPath: string;
}

export default function BaseBanner({ title, linkPath }: BannerProps) {
  const router = useRouter();
  const handleOnClickBanner = () => {
    router.push(linkPath);
  };
  return (
    <BaseButton
      className={cn(customInput.bannerCon)}
      onClick={handleOnClickBanner}
    >
      <p className="text-4xl text-[#404833] font-geomGraphic font-bold mx-9 mt-6 top-0 left-0 absolute">
        {title}
      </p>
    </BaseButton>
  );
}
