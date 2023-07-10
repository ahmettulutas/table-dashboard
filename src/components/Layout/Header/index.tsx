import React, { FunctionComponent } from "react";
import PrimaryButton from "~/components/UIComponents/Button";

import PackageDeliverySvg from "~/assets/icons/packageDelivery.svg";
import NotificationSvg from "~/assets/icons/notification.svg";
import MessageSvg from "~/assets/icons/message.svg";
import UserAvatar from "~/assets/icons/user-avatar.svg";

const Header:FunctionComponent = () => (
  <div className="flex gap-2 flex-col sm:flex-row items-end justify-end border-b-primaryGray my-6">
    <div className="order-1 sm:order-0">
      <PrimaryButton id={"createAPost"} icon={PackageDeliverySvg} customStyles={"btn-primary"}/>
    </div>
    <div className="flex items-center order-0 sm:order-1">
      <MessageSvg className="hover:text-black cursor-pointer mx-4 dark:text-white" />
      <NotificationSvg className="hover:text-black cursor-pointer mx-4 dark:text-white" />
      <UserAvatar />
    </div>
  </div>
);

export default Header;