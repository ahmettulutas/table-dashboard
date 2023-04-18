import { AxiosError, AxiosResponse } from 'axios';
type HTTPMethod = "get" | "post" | "put" | "delete";


type ApiError = {
  message: string
  response?: {
    data?: {
      message: string
    }
  }
}