import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import Tracking from "~/assets/icons/tracking.svg";
import { enums } from "~/lib/enums";
import StatusBadge from "../UIComponents/StatusBadge";
import { selectFilteredPosts } from "~/store/api/redux/posts/selectors";
import { setSelectedRows } from "~/store/api/redux/common";
import { selectedItems } from "~/store/api/redux/common/selectors";

const Table:FunctionComponent = () => {

  const data = useAppSelector(selectFilteredPosts);
  const dispatch = useAppDispatch();
  const selectedRows = useAppSelector(selectedItems);
  const { t } = useTranslation();

  const toggleRow = (id: string) => {
    dispatch(setSelectedRows(selectedRows.includes(id) ? selectedRows.filter(item => item !== id) : ([...selectedRows, id])));
  };
  const toggleAllRows = () => {
    dispatch(setSelectedRows((selectedRows.length === data?.length ? [] : data?.map(item => item.number) ?? [])));
  };

  const generatedRows = data?.map(item => {
    const selected = selectedRows.includes(item.number);
    return (
      <tr key={item.number} className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
    <div className="relative overflow-x-auto h-full">
      <div className="h-2/3 relative">
        <table className="w-full text-sm text-left text-gray-900 font-semibold dark:text-white overflow-hidden">
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
    </div>

  );
};

export default Table;