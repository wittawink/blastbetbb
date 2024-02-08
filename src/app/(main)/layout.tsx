import React from "react";

export default function MainLayout({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return (
    <>
      Hello Layout
      <main className="flex flex-grow flex-col">{children}</main>
    </>
  );
}
