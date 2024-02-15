"use client";
import cn from "@/lib/cn";
import React from "react";
import customInput from "@/styles/custom-input.module.css";
import BaseButton from "../BaseButton";
import { useRouter } from "next/navigation";

interface BannerProps {
  title: string;
  linkPath: string;
  subTitle?: string;
  className?: string;
  titleColor?: string;
  subTitleColor?: string;
}

export default function BaseBanner({
  title,
  linkPath,
  subTitle,
  className,
  titleColor,
  subTitleColor,
}: BannerProps) {
  const router = useRouter();
  const handleOnClickBanner = () => {
    router.push(linkPath);
  };
  return (
    <BaseButton
      className={cn(customInput.bannerCon, className)}
      onClick={handleOnClickBanner}
    >
      <p
        className={cn(
          customInput,
          titleColor,
          "text-4xl text-[#404833] font-geomGraphic font-bold mx-9 mt-6 top-0 left-0 absolute whitespace-nowrap"
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          customInput,
          subTitleColor,
          "text-xl text-left text-[#404833] font-geomGraphic font-bold mx-9 left-0"
        )}
      >
        {subTitle}
      </p>
    </BaseButton>
  );
}
