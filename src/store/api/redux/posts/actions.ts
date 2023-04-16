import { createRequestThunk } from "../redux-builders";
import endpoints from "../../axiosservice/endpoints";
import { PostRequest, PostResponse } from "./types";

const postThunks = {
  posts: {
    post: createRequestThunk<PostRequest, PostResponse>("post", "posts", endpoints.posts)
  }
};

export { postThunks };