export type CommonReducers = {
  isDarkTheme: boolean,
  lang: Enums["langs"],
  selectedFilter: keyof Enums["postStatus"] | undefined,
  selectedItems : Array<string>
}