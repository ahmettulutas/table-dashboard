import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { enums } from "~/lib/enums";
import { PostStatus } from "~/store/api/redux/posts/types";
import Arrow from "~/assets/icons/arrow.svg";
import { getColor } from "~/lib/helpers";

type StatusProps = {
  status:PostStatus
}

const StatusBadge:FunctionComponent<StatusProps> = ({ status }) => {
  const { t } = useTranslation();
  const { bgColor, textColor } = getColor(status);
  return (
    <div className={`flex gap-1 align-middle justify-center p-2 ${bgColor} ${textColor} rounded-lg cursor-pointer text-center` }>{t(`lbl.${enums.postStatus[status]}`)}
      <Arrow className={`w-4 h-4 my-auto ${textColor} dark:text-inherit`}/>
    </div>
  );
};

export default StatusBadge;