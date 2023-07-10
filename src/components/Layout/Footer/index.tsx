import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Button from "~/components/UIComponents/Button";
import { selectedItems } from "~/store/api/redux/common/selectors";
import { useAppSelector } from "~/utils/hooks";
import ActionsSvg from "~/assets/icons/actions.svg";
import ExcelSvg from "~/assets/icons/excel.svg";
import BarcodeSvg from "~/assets/icons/barcode.svg";
import UpdateSvg from "~/assets/icons/updateStatus.svg";

const Footer:FunctionComponent = () => {
  const selectedRows = useAppSelector(selectedItems);
  const { t } = useTranslation();
  return (
    <div className="absolute flex gap-2 overflow-scroll flex-col md:flex-row justify-between items-center bottom-0 left-0 w-full text-center p-2 md:p-10 shadow-xl bg-white dark:bg-gray-900">
      <p className="font-semibold text-gray-900 dark:text-white">{`${selectedRows.length} ${t("msg.selectedItems")}`}</p>
      <div className="flex gap-2">
        <Button customStyles={"btn-primary bg-secondary"} id={"actions"} icon={ActionsSvg} />
        <Button customStyles={"btn-primary bg-lightBlue"} id={"excelDownload"} icon={ExcelSvg} />
        <Button customStyles={"btn-primary bg-darkBlue"} id={"barcodeDownload"} icon={BarcodeSvg} />
        <Button customStyles={"btn-primary"} id={"updateStatus"} icon={UpdateSvg} />
      </div>
    </div>
  );
};

export default Footer;