import React, { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const DropdownMenu:FunctionComponent<SideBarItem> = ({ id, svg, subRoutes }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const Svg = svg;
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
        <Svg />
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{t(`${id}`)}</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>
      <ul className={`${open ? "block": "hidden"} py-2 space-y-2`}>
        {subRoutes?.map(item => (<li key={item.id}>
          <Link className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" to="#">{t(`${item.id}`)}</Link>
        </li>)
        )}
      </ul>
    </div>
  );
};

export default DropdownMenu;