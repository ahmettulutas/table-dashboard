import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

type PrimaryButtonProps = {
  id:string,
  icon?:React.FC<React.SVGProps<SVGElement>>,
  customStyles?: string
}

const PrimaryButton:FunctionComponent<PrimaryButtonProps> = ({ id, icon, customStyles }) => {
  const { t } = useTranslation();
  const Icon = icon;

  return (
    <button className={`${customStyles}`}>
      {Icon ? <Icon /> : undefined}
      <span>{t(`lbl.${id}`)}</span>
    </button>
  );
};

export default PrimaryButton;