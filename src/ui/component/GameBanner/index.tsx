import React from "react";

interface GameBannerProps {
  text: string;
}

export default function GameBanner({ text }: GameBannerProps) {
  return <div className="">{text}</div>;
}
