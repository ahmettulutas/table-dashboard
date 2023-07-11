import React, { FunctionComponent } from "react";
import { LoadingSpinner } from "~/components/UIComponents";

const SearchInTable = React.lazy(() => import("~/components/UIComponents/SearchInTable"));
const Limit = React.lazy(() => import("~/components/UIComponents/LimitDropdown"));

const TableHeader:FunctionComponent = () => (
  <div className="my-4 flex gap-2 justify-between items-center">
    <React.Suspense fallback={<LoadingSpinner />}>
      <Limit />
    </React.Suspense>
    <React.Suspense fallback={<LoadingSpinner />}>
      <SearchInTable />
    </React.Suspense>
  </div>
);

export default TableHeader;