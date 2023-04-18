import { RootState } from "..";
import { selectStatusFilter } from "../common/selectors";

export const selectAllPosts = (state:RootState) => state.postSlice.posts.data?.response.datas;
export const selectFilteredPosts = (state:RootState) => {
  const selectedFilter = selectStatusFilter(state);
  const allPosts = selectAllPosts(state);
  if (selectedFilter)
    return allPosts?.filter(item => item.post_status === selectedFilter);
  else
    return allPosts;

};
