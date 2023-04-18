import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SidebarItem:FunctionComponent<MenuLink> = ({ id, svg }) => {
  const Svg = svg;
  const { t } = useTranslation();
  return (
    <Link to="#" className="flex items-center p-2 text-primaryGrayText rounded-lg dark:text-white hover:bg-primaryGray dark:hover:bg-gray-700">
      <Svg />
      <span className="flex-1 ml-3 whitespace-nowrap">{t(`${id}`)}</span>
    </Link>
  );
};

export default SidebarItem;