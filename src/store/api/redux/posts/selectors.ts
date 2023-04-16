import { RootState } from "..";

export const selectAllPosts = (state:RootState) => state.postSlice.posts.data;
