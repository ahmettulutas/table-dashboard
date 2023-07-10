import { enums, Enums } from "~/lib/enums"
import { ApiError } from "../../axiosservice/types"
import { RequestModel } from "../../types"

export type PostResponse = Post[];


export type PostStatus = keyof typeof enums.postStatus;
export type PostType = keyof typeof enums.postType;

export type Post = {
	number: string
	post_status: PostStatus
	post_desi: string
	post_type: PostType
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
