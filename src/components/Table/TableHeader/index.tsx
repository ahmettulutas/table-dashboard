import { FunctionComponent } from "react";
import SearchInTable from "~/components/UIComponents/SearchInTable";
import LimitDropdown from "./LimitDropdown";

const TableHeader:FunctionComponent = () => (
  <div className="my-4 flex gap-2 justify-between items-center">
    <LimitDropdown />
    <SearchInTable />
  </div>
);

export default TableHeader;