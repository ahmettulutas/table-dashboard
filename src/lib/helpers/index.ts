import { PostStatus } from "~/store/api/redux/posts/types";
import { enums } from "../enums";

export const filterArrayByValue = <T, K extends keyof T> (array: T[], key: K, value: T[K]): T[] => array.filter(item => item[key] === value);
export const getColor = (status:PostStatus):{ bgColor: string, textColor: string } => {
  const error = enums.errorStatuses.find(item => item === Number(status));
  const info = enums.infoStatuses.find(item => item === Number(status));
  const success = enums.successStatuses.find(item => item === Number(status));
  if (error)
    return { bgColor: "bg-errorLight", textColor: "text-error" };
  if (info)
    return { bgColor: "bg-infoLight", textColor: "text-info" };
  if (success) return { bgColor: "bg-successLight", textColor: "text-success" };
  else return { bgColor: "bg-infoLight", textColor: "text-info" };
};