import { RequestModel } from "../../types"

export type PostResponse =  {
    time: number
    status: number
    response: Response
    message: string
}

export type Response = {
    datas: Post[]
    totalRecords: number
}

export type Post = {
    number: string
    post_status: string
    post_desi: string
    post_type: string
    post_package: string
    created_at: string
    sender_name: string
    recipient_name: string
}

export type PostRequest =  RequestModel & {
    offset: number,
    limit: number,
    sortField?: string,
    sortOrder?: null
}
