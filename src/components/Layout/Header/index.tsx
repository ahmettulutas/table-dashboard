import React, { FunctionComponent } from "react";
import PrimaryButton from "~/components/UIComponents/Button";
import SearchBar from "~/components/UIComponents/SearchBar";
import PackageDeliverySvg from "~/assets/icons/packageDelivery.svg";
import NotificationSvg from "~/assets/icons/notification.svg";
import MessageSvg from "~/assets/icons/message.svg";
import LogoSmallSvg from "~/assets/icons/logoSmall.svg";

const Header:FunctionComponent = () => (

  <div className="flex justify-between border-b-primaryGray p-6 items-center">
    <SearchBar />
    <div className="flex items-center">
      <PrimaryButton id={"createAPost"} icon={PackageDeliverySvg} customStyles={"btn-primary"}/>
      <MessageSvg className="hover:text-black cursor-pointer mx-4 dark:text-white" />
      <NotificationSvg className="hover:text-black cursor-pointer mx-4 dark:text-white" />
      <LogoSmallSvg />
    </div>
  </div>
);

export default Header;