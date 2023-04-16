import { HttpStatusCode } from "axios";

type HTTPMethod = "get" | "post" | "put" | "delete";

interface RequestModel {
  path?: string
  headers?: { [key: string]: string | number }
  params?: { [key: string]: any }
  body?: { [key: string] : string }
}

export type Error = {
  code?: string
  message?: string
  data?: null
}
