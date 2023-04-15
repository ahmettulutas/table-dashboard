export const
  enums = {
    status: {
      success: "success",
      error: "danger"
    },
    langs: {
      tr: "tr",
      en: "en"
    }
  } as const;

type EnumTypeGenerator<T extends object> = T[keyof T];
type TEnums = typeof enums;

export type Enums = {
  [key in keyof TEnums]: EnumTypeGenerator<TEnums[key]>
}

// function(name: Enums["status"])
// function(enums.status.error)