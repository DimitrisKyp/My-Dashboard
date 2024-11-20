import React, { ReactNode } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import useTheme from './themes/useTheme';
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const theme = useTheme();

    return (
    <div className={`flex min-h-screen ${theme.colors.background.primary} text-gray-100 font-sans`}>
      {/* Left Panel - Personal Info */}
      <aside className={`w-1/5 ${theme.colors.background.secondary} text-white p-6 fixed h-full flex flex-col items-center`}>
        <LeftPanel />
      </aside>

      {/* Main Content Area */}
      <main className="w-3/5 ml-[20%] mr-[20%] p-8 overflow-y-auto">
        {children}
      </main>

      {/* Right Panel - Navigation Links */}
      <aside className="w-1/5 text-white p-6 fixed right-0 h-full">
        <RightPanel />
      </aside>
    </div>
  );
}
