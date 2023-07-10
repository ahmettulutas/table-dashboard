import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import Tracking from "~/assets/icons/tracking.svg";
import { enums } from "~/lib/enums";
import StatusBadge from "../UIComponents/StatusBadge";
import { selectFilteredPosts } from "~/store/api/redux/posts/selectors";
import { setSelectedRows } from "~/store/api/redux/common";
import { selectedItems, selectSearchQuery } from "~/store/api/redux/common/selectors";
import TableHeader from "./TableHeader";
import { LoadingSpinner } from "../UIComponents";

const Table:FunctionComponent = () => {

  const { loading } = useAppSelector(state => state.postSlice.posts);
  const data = useAppSelector(selectFilteredPosts);
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(selectSearchQuery);
  const selectedRows = useAppSelector(selectedItems);
  const { t } = useTranslation();

  const handleCheckRow = (id: string) => {
    dispatch(setSelectedRows(selectedRows.includes(id) ? selectedRows.filter(item => item !== id) : ([...selectedRows, id])));
  };
  const handleCheckAll = () => {
    dispatch(setSelectedRows((selectedRows.length === data?.length ? [] : data?.map(item => item.number) ?? [])));
  };

  const generatedRows = data?.map(item => {
    const selected = selectedRows.includes(item.number);
    return (
      <tr key={item.number} className=" even:bg-gray-50 dark:even:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
        <td className="w-4 p-3">
          <input
            onChange={() => handleCheckRow(item.number)}
            type="checkbox"
            className="checkbox-primary"
            checked={selected}>
          </input>
        </td>
        <td scope="row" className="p-3 font-medium text-primaryBlue dark:text-darkPrimaryBlue whitespace-nowrap">{item.number}</td>
        <td className="p-3"><Tracking className="m-auto"/></td>
        <td className={`p-3 ${searchTerm && item.sender_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ? "highlighted" : ""}`}>
          {item.sender_name}
        </td>
        <td className={`p-3 ${searchTerm && item.recipient_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ? "highlighted" : ""}`}>{item.recipient_name}</td>
        <td className="p-3 text-center">{item.post_desi}</td>
        <td className="p-3">{t(`lbl.${enums.postType[item.post_type]}`)}</td>
        <td className="p-3"><StatusBadge status={item.post_status} /></td>
        <td className="p-3">{item.created_at}</td>
      </tr>);
  });

  return (
    <div className="relative h-full ">
      <TableHeader />
      {
        loading ?
          <LoadingSpinner />
          :
          <div className="h-2/3 relative overflow-x-auto custom-scrollbar">
            <table className="w-full text-sm text-left text-gray-900 font-semibold dark:text-white">
              <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 text-primaryGrayText dark:text-white">
                <tr>
                  <th className="w-4 p-3">
                    <div className="flex items-center">
                      <input
                        onChange={() => handleCheckAll()}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-center">{t("lbl.orderNumber").toLocaleUpperCase("tr-TR")}</th>
                  <th className="px-4 py-3 text-center">{t("lbl.tracking").toLocaleLowerCase("tr-TR")}</th>
                  <th className="px-4 py-3 text-center">{t("lbl.sender").toLocaleLowerCase("tr-TR")}</th>
                  <th className="px-4 py-3 text-center">{t("lbl.receiver").toLocaleLowerCase("tr-TR")}</th>
                  <th className="px-4 py-3 text-center">{t("lbl.desi").toLocaleLowerCase("tr-TR")}</th>
                  <th className="px-4 py-3 text-center">{t("lbl.type").toLocaleLowerCase("tr-TR")}</th>
                  <th className="px-4 py-3 text-center">{t("lbl.sendStatus").toLocaleLowerCase("tr-TR")}</th>
                  <th className="px-4 py-3 text-center">{t("lbl.sendDate").toLocaleLowerCase("tr-TR")}</th>
                </tr>
              </thead>
              <tbody>
                {generatedRows}
              </tbody>
            </table>
          </div>
      }
    </div>
  );
};

export default Table;