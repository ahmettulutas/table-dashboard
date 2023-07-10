import React, { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import Arrow from "~/assets/icons/arrow.svg";
import { getPosts } from "~/store/api/redux/posts/reducers";
import { selectAllPosts } from "~/store/api/redux/posts/selectors";
import { useAppSelector } from "~/utils/hooks";

const offsets = [50, 100, 200];

const LimitDropdown:FunctionComponent = () => {

  const [open, setOpen] = useState<boolean>(false);
  const data = useAppSelector(selectAllPosts);
  const [limit, setLimit] = useState<number>(data?.length || 100);
  const { t } = useTranslation();

  const handleLimitChange = (selectedLimit: number) => {
    setLimit(selectedLimit);
    getPosts({ offset: 1, limit: selectedLimit });
  };

  return (
    <div className="relative w-fit flex items-center gap-2 z-10">
      <p>{t("lbl.list")}:</p>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className={`relative flex items-center w-full p-2 transition duration-75 bg-bgGray dark:bg-gray-700 dark:text-white ${open ? "rounded-t-2xl" : "rounded-2xl"}`}>
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{limit}</span>
        <Arrow className="w-6 h-6"/>
        <ul className={`${open ? "flex": "hidden"} overflow-hidden top-full absolute left-0 w-full bg-gray-100  dark:bg-gray-700 rounded-b-2xl flex-col`}>
          {offsets?.map(item => (
            <li className="hover:bg-gray-200 pl-5 py-1 dark:hover:bg-gray-600 transition duration-200 text-left"
              key={item}
              onClick={() => handleLimitChange(item)}
            >{item}
            </li>)
          )}
        </ul>
      </button>

    </div>
  );
};

export default React.memo(LimitDropdown);