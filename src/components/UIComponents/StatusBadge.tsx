import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { enums } from "~/lib/enums";
import { PostStatus } from "~/store/api/redux/posts/types";
import Arrow from "~/assets/icons/arrow.svg";

type StatusProps = {
  status:PostStatus
}
const getColor = (status:PostStatus):{ bgColor: string, textColor: string } => {
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

const StatusBadge:FunctionComponent<StatusProps> = ({ status }) => {
  const { t } = useTranslation();
  const { bgColor, textColor } = getColor(status);
  return (
    <div className={`flex gap-1 align-middle justify-center p-2 ${bgColor} ${textColor} rounded-lg cursor-pointer text-center` }>{t(`lbl.${enums.postStatus[status]}`)}
      <Arrow className="w-4 h-4 my-auto"/>
    </div>
  );
};

export default StatusBadge;