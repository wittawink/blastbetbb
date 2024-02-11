import LayoutHeader from "@/ui/layout/LayoutHeader";
import LayoutSidebar from "@/ui/layout/LayoutSidebar";
import React from "react";

export default function MainLayout({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return (
    <div className="relative">
      <LayoutHeader text={"CASINO"} />
      <LayoutSidebar text={"hello"} />
      <main className="flex flex-grow flex-col">{children}</main>
    </div>
  );
}
