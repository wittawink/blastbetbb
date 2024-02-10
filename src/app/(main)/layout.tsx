import LayoutHeader from "@/ui/layout/LayoutHeader";
import React from "react";

export default function MainLayout({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return (
    <>
      <LayoutHeader text={""} />
      <main className="flex flex-grow flex-col">{children}</main>
    </>
  );
}
