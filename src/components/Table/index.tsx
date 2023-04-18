import React, { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "~/utils/hooks";
import Tracking from "~/assets/icons/tracking.svg";
import { enums } from "~/lib/enums";
import StatusBadge from "../UIComponents/StatusBadge";

const Table:FunctionComponent = () => {
  const [selectedItems, setSelectedItems] = useState<Array<string>>([]);

  const data = useAppSelector(state => state.postSlice.posts.data?.response.datas);
  const { t } = useTranslation();

  const toggleRow = (id: string) => {
    setSelectedItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : ([...prev, id]));
  };
  const toggleAllRows = () => {
    setSelectedItems(prev => (prev.length === data?.length ? [] : data?.map(item => item.number) ?? []));
  };

  const generatedRows = data?.map(item => {
    const selected = selectedItems.includes(item.number);
    return (
      <tr key={item.number} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-3">
          <div className="flex items-center">
            <input
              onChange={() => toggleRow(item.number)}
              type="checkbox"
              className="w-4 h-4 text-primaryBlue bg-gray-100 border-gray-300 rounded focus:ring-primaryBlue dark:focus:ring-primaryBlue dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={selected}/>
          </div>
        </td>
        <th scope="row" className="p-3 font-medium text-primaryBlue whitespace-nowrap">
          {item.number}
        </th>
        <td className="p-3">
          <Tracking className="m-auto"/>
        </td>
        <td className="p-3">
          {item.sender_name}
        </td>
        <td className="p-3 text-center">
          {item.recipient_name}
        </td>
        <td className="p-3 text-center">
          {item.post_desi}
        </td>
        <td className="p-3">
          {t(`lbl.${enums.postType[item.post_type]}`)}
        </td>
        <td className="p-3">
          <StatusBadge status={item.post_status} />
        </td>
        <td className="p-3">
          {item.created_at}
        </td>
      </tr>);
  });


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-full">
      <div>
        <table className="w-full text-sm text-left text-gray-900 font-semibold dark:text-white">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 text-primaryGrayText dark:text-white">
            <tr>
              <th className="w-4 p-3">
                <div className="flex items-center">
                  <input
                    onChange={() => toggleAllRows()}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>
              </th>
              <th className="px-4 py-3 text-center">
                {t("lbl.orderNumber").toLocaleUpperCase("tr-TR")}
              </th>
              <th className="px-4 py-3 text-center">
                {t("lbl.tracking").toLocaleLowerCase("tr-TR")}
              </th>
              <th className="px-4 py-3 text-center">
                {t("lbl.sender").toLocaleLowerCase("tr-TR")}
              </th>
              <th className="px-4 py-3 text-center">
                {t("lbl.receiver").toLocaleLowerCase("tr-TR")}
              </th>
              <th className="px-4 py-3 text-center">
                {t("lbl.desi").toLocaleLowerCase("tr-TR")}
              </th>
              <th className="px-4 py-3 text-center">
                {t("lbl.type").toLocaleLowerCase("tr-TR")}
              </th>
              <th className="px-4 py-3 text-center">
                {t("lbl.sendStatus").toLocaleLowerCase("tr-TR")}
              </th>
              <th className="px-4 py-3 text-center">
                {t("lbl.sendDate").toLocaleLowerCase("tr-TR")}
              </th>
            </tr>
          </thead>
          <tbody>
            {generatedRows}
          </tbody>
        </table>
      </div>
      <nav className="flex flex-col items-start justify-between p-3 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>

  );
};

export default Table;