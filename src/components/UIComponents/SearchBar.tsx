import React, { /* useEffect, */ useState } from "react";
import { useTranslation } from "react-i18next";
import Cross from "~/assets/icons/cross.svg";
import SearchIcon from "~/assets/icons/search.svg";
/* import { setSearchQuery } from "~/store/api/redux/common";
import { useAppDispatch } from "~/utils/hooks";
import { useDebounce } from "~/utils/hooks/"; */

const SearchBar:React.FC = () => {

  const [searchInput, setSearchInput] = useState<string>("");
  /*   const debouncedValue = useDebounce(searchInput, 500);
  const dispatch = useAppDispatch(); */
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  /*   useEffect(() => {
    dispatch(setSearchQuery(debouncedValue));
  }, [debouncedValue]);
 */
  return (
    <div className="relative mb-4 overflow-hidden">
      <button className={`absolute
      transition-all duration-200
      p-2 rounded-lg
      inset-y-0 left-0 flex items-center z-50 cursor-pointer
      hover:text-black
      ${open ? "dark:hover:text-white" : "bg-bgLightGray "}`}>
        <SearchIcon onClick={() => {
          setOpen(!open);
        }}/>
      </button>
      <div className={`w-full transition-all duration-200 ${open ? "w-full" : "-translate-x-full"}`}>
        <input
          value={searchInput}
          type="text"
          className="bg-gray-50 border
        border-gray-300  text-sm rounded-lg
        focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder={t("lbl.search")}
          onChange={handleChange}
        />
        <button
          onClick={() => setSearchInput("")} // resets the searchQuery
          className="hover:text-black dark:hover:text-white absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          <Cross className="w-6 h-6"/>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;