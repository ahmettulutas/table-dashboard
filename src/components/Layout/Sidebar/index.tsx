import React, { FunctionComponent, useState } from "react";
import { routes } from "~/lib/constants";
import DropdownMenu from "./sidebarDropdown";
import SidebarItem from "./sidebarItem";
import MenuButton from "~/assets/icons/menu.svg";
import { DarkModeToggle } from "~/components/UIComponents";
import ToggleLang from "~/components/UIComponents/ToggleLang";

const Sidebar:FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuButton onClick={() => setOpen(!open)} className="absolute z-50 left-2 top-2 inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"/>
      <aside className={`absolute md:relative top-0 left-0 z-40 w-64 transition-transform ${!open ? "-translate-x-full" : ""} md:translate-x-0 p-3 dark:bg-gray-900 text-gray-500 dark:text-gray-400 bg-white h-full flex flex-col`}>
        <h1 className="mt-10 pl-2 dark:text-white text-black text-2xl leading-8">POSTAPP</h1>
        <div>
        </div>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {routes.map(item => item.subRoutes ?
              <li key={item.id}><DropdownMenu {...{ ...item }} /></li>
              :
              <li key={item.id}><SidebarItem id={item.id} svg={item.svg} /></li>
            )}
          </ul>
        </div>
        <div className="mt-auto flex justify-between">
          <DarkModeToggle />
          <ToggleLang />
        </div>
      </aside>
      <div
        className={`absolute bg-gray-900 bg-opacity-50 dark:bg-opacity-80 inset-0 z-30 md:hidden ${open ? "block" : "hidden"}`}
        onClick={() => setOpen(false)}>
      </div>
    </>
  );
};

export default Sidebar;