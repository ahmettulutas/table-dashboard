import Delivery from "~/assets/icons/delivery.svg";
import Dashboard from "~/assets/icons/dashboard.svg";
import Users from "~/assets/icons/users.svg";
import Billing from "~/assets/icons/billing.svg";
import SmsSettings from "~/assets/icons/smsSettings.svg";
import GeoForce from "~/assets/icons/geoforce.svg";
import Documents from "~/assets/icons/documents.svg";
import WebServices from "~/assets/icons/webServices.svg";
import FileLogs from "~/assets/icons/fileLogs.svg";


export const routes:Array<SideBarItem> =
[
  { id: "lbl.deliveries", svg: Delivery },
  { id: "lbl.dashboard", svg: Dashboard },
  { id: "lbl.users", svg: Users, subRoutes: [{ id: "lbl.users", svg: Users }] },
  { id: "lbl.billing", svg: Billing, subRoutes: [{ id: "lbl.billing", svg: Billing }] },
  { id: "lbl.smsSettings", svg: SmsSettings, subRoutes: [{ id: "lbl.smsSettings", svg: SmsSettings }] },
  { id: "lbl.geofence", svg: GeoForce },
  { id: "lbl.documents", svg: Documents },
  { id: "lbl.webServices", svg: WebServices },
  { id: "lbl.fileLogs", svg: FileLogs }
];