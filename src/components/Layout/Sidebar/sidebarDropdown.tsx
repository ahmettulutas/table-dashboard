import React, { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Arrow from "~/assets/icons/arrow.svg";

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
        <Svg className="dark:text-white" />
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{t(`${id}`)}</span>
        <Arrow className="w-6 h-6"/>
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