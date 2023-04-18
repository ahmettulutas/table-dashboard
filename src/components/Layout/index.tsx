import React from "react";
import Header from "./Header";
/* import Header from "./header"; */
import Sidebar from "./Sidebar";

const Layout:React.FC<{children:React.ReactElement}> = ({ children }) => (
  <div className="flex h-screen dark:bg-gray-900 text-gray-500 dark:text-gray-400 w-screen overflow-hidden">
    <Sidebar />
    <main className="container">
      <Header />
      {children}
    </main>
  </div>

);

export default Layout;