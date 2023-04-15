export const filterArrayByValue = <T, K extends keyof T> (array: T[], key: K, value: T[K]): T[] => array.filter(item => item[key] === value);
