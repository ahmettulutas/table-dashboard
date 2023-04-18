import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout:React.FC<{children:React.ReactElement}> = ({ children }) => (
  <div className="flex h-screen dark:bg-gray-900 text-gray-500 dark:text-gray-400 w-full">
    <Sidebar />
    <main className="container overflow-hidden relative">
      <Header />
      {children}
      <Footer />
    </main>
  </div>

);

export default Layout;