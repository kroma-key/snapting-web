import { NonEmptyArray } from "./index.type";

const isValidString = (value: unknown): value is string => {
  return typeof value === "string" && value.length > 0;
};

const isNonEmptyArray = <T>(value: unknown): value is NonEmptyArray<T> => {
  return Array.isArray(value) && value.length > 0;
};

export const G = {
  isValidString,
  isNonEmptyArray,
};
