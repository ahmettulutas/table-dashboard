import React from "react";
/* import Header from "./header"; */
import Sidebar from "./Sidebar";

const Layout:React.FC<{children:React.ReactElement}> = ({ children }) => (
  <div className="flex h-screen dark:bg-gray-900 text-gray-500 dark:text-gray-400 w-screen overflow-hidden">
    <Sidebar />
    <main className="mt-20 container">
      {children}
    </main>
  </div>

);

export default Layout;