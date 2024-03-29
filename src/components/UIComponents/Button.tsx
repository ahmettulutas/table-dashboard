import React, { ButtonHTMLAttributes, FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  id:string,
  icon?:React.FC<React.SVGProps<SVGElement>>,
  customStyles?: string,
  children?: ReactElement
}

const Button:FunctionComponent<ButtonProps> = ({ id, icon, customStyles, children, ...rest }) => {
  const { t } = useTranslation();
  const Icon = icon;

  return (
    <button className={`${customStyles}`} {...rest}>
      {Icon ? <Icon /> : undefined}
      <span>{t(`lbl.${id}`)}</span>
      {children}
    </button>
  );
};

export default Button;