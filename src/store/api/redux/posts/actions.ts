import { createRequestThunk } from "../redux-builders";
import endpoints from "../../axiosservice/endpoints";
import { PostRequest, PostResponse } from "./types";

const postThunks = {
  posts: {
    get: createRequestThunk<PostRequest, PostResponse>("get", "posts", endpoints.posts)
  }
};

export { postThunks };