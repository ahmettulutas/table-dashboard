import React, { FunctionComponent } from "react";
type TMenuItem = {
  svg: React.ReactElement,
  title: string
}
const MenuItem:FunctionComponent<TMenuItem> = ({ title, svg }) => (
  <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
    {svg}
    <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
  </a>
);

export default MenuItem;