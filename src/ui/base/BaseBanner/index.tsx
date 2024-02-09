import cn from "@/lib/cn";
import React from "react";
import customInput from "@/styles/custom-input.module.css";

interface BannerProps {
  text: string;
}

export default function BaseBanner({ text }: BannerProps) {
  return (
    <div className={cn(customInput.bannerCon)}>
      <p className="text-4xl text-black font-bold mx-9 mt-6">{text}</p>
    </div>
  );
}
