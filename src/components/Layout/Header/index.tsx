import React, { FunctionComponent } from "react";
import PrimaryButton from "~/components/UIComponents/Button";
import SearchBar from "~/components/UIComponents/SearchBar";
import PackageDelivery from "~/assets/icons/packageDelivery.svg";
import Notification from "~/assets/icons/notification.svg";
import Message from "~/assets/icons/message.svg";
import LogoSmall from "~/assets/icons/logoSmall.svg";

const Header:FunctionComponent = () => (

  <div className="flex justify-between border-b-primaryGray px-6 py-10 items-center">
    <SearchBar />
    <div className="flex items-center">
      <PrimaryButton id={"createAPost"} icon={PackageDelivery} customStyles={"btn-primary"}/>
      <Message className="hover:text-black cursor-pointer mx-4 dark:text-white" />
      <Notification className="hover:text-black cursor-pointer mx-4 dark:text-white" />
      <LogoSmall />
    </div>
  </div>
);

export default Header;