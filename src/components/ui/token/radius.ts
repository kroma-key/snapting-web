export const radiusKeyList = ["default", "sm", "lg", "xl", "2xl", "none"] as const;
export type RadiusKey = (typeof radiusKeyList)[number];

export const radiusVariants = {
  default: "rounded-md",
  sm: "rounded-sm",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  none: "rounded-none",
} satisfies Record<RadiusKey, string>;
