export const
  enums = {
    status: {
      success: "success",
      error: "danger"
    },
    langs: {
      tr: "tr",
      en: "en"
    },
    postStatus: {
      1: "toBePickedUp",
      2: "delivered",
      3: "willBeDelivered",
      4: "onTheWay",
      5: "reDispatch",
      6: "deliveryScheduled",
      7: "toBeReturned",
      8: "toBeReturndedOutOfRange",
      9: "returned",
      10: "cancelled",
      11: "outOfRange",
      12: "revoked",
      13: "completed",
      14: "preview",
      15: "deleted",
      16: "pickedUp",
      17: "inTransit",
      18: "waitingInBranch"
    },
    postType: {
      1: "sameDayDelivery",
      2: "nextDayDelivery",
      3: "returnPickUp",
      4: "change"
    },
    errorStatuses: [7, 8, 9, 10, 11, 12, 15],
    successStatuses: [2, 13, 16, 17],
    infoStatuses: [1, 3, 4, 5, 6, 14, 18]


  } as const;

type EnumTypeGenerator<T extends object> = T[keyof T];
type TEnums = typeof enums;

export type Enums = {
  [key in keyof TEnums]: EnumTypeGenerator<TEnums[key]>
}

// function(name: Enums["status"])
// function(enums.status.error)