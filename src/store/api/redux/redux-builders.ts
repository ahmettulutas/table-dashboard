import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import service from "../axiosservice";
import { ApiError } from "../axiosservice/types";


import { HTTPMethod, RequestModel } from "../types";

export const createRequestThunk = <Req extends RequestModel | undefined, Res>(method: HTTPMethod, stateKey: string, url: string) => createAsyncThunk(stateKey, async (request: Req, { rejectWithValue }) => {
  try {
    const response = await service[method]<Res>(`${url}${request?.path ? request.path : ""}`, { ...request });
    return response.data as Res;
  }
  catch (err: any) {
    if (err.isAxiosError)
      return rejectWithValue(err as AxiosError);
    else return rejectWithValue(err as ApiError);
  }
});

export const createInitialApiState = <T>(endpoints: string[]): T => {
  const initialState: any = {};

  endpoints.forEach(endpoint => {
    initialState[endpoint] = {};
  });

  return initialState as T;
};