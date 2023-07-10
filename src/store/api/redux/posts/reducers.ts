import { store } from "..";
import { postThunks } from "./actions";
import { PostRequest } from "./types";

export const getPosts = (body:PostRequest) => store.dispatch(postThunks.posts.get(body));
