import React, { ReactNode } from "react";
import LeftPanel from "./components/leftPanel";
import RightPanel from "./components/rightPanel";
import useTheme from "./themes/useTheme";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const theme = useTheme();

  return (
    <div className={`flex min-h-screen ${theme.background.level0} ${theme.text.secondary} `}>
      {/* Left Panel - Personal Info */}
      <aside className={`fixed left-0 top-1/4 flex w-2/6 justify-center p-6`}>
        <LeftPanel />
      </aside>
      {/* Main Content Area */}
      <main className="ml-[33.33%] mr-[16.66%] w-3/6 overflow-y-auto p-6">{children}</main>
      {/* Right Panel - Navigation Links */}
      <aside className={`fixed right-0 top-1/4 flex w-1/6 p-6`}>
        <RightPanel />
      </aside>
    </div>
  );
}
