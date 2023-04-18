import { RootState } from "..";

export const selectStatusFilter = (state:RootState) => state.common.selectedFilter;
export const selectedItems = (state:RootState) => state.common.selectedItems;
export const selectSearchQuery = (state:RootState) => state.common.searchQuery;