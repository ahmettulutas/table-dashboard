import React, { FunctionComponent } from "react";
import SearchInTable from "~/components/UIComponents/SearchInTable";
import LimitDropdown from "./limitDropdown";

const TableHeader:FunctionComponent = () => (
  <div className="my-4 flex justify-between items-center">
    <LimitDropdown />
    <SearchInTable />
  </div>
);

export default TableHeader;