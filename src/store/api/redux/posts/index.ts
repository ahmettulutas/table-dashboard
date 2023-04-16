import { createReducer, SerializedError } from "@reduxjs/toolkit";
import { createInitialApiState } from "../redux-builders";
import { postThunks } from "./actions";
import { Error } from "../../types";


type PostApiActions = typeof postThunks
type PostState = {
  [endpoint in keyof PostApiActions]: {
    data?: ReturnType<PostApiActions[endpoint]["post"]["fulfilled"]>["payload"]
    loading?: boolean
    error?: SerializedError | Error
  }
}

const endpoints = Object.keys(postThunks) as Array<keyof PostApiActions>;
const initialState = createInitialApiState<PostState>(endpoints);
const postReducer = createReducer(
  initialState, builder => {
    endpoints.forEach(endpoint => {
      const thunk = postThunks[endpoint];
      builder.addCase(thunk.post.pending, state => {
        state[endpoint].loading = true;
        state[endpoint].error = undefined;
      });
      builder.addCase(thunk.post.fulfilled, (state, action) => {
        state[endpoint].loading = false;
        state[endpoint].data = action.payload;
      });
      builder.addCase(thunk.post.rejected, (state, action) => {
        state[endpoint].loading = false;
        if (action.meta.rejectedWithValue) state[endpoint].error = action.payload as Error;
        else state[endpoint].error = action.error as SerializedError;
      });
    });
  });

export { postReducer };