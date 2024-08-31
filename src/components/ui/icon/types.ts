import type { SVGProps } from "react";

import { colorMap } from "../token/color";

export const size = ["36", "32", "24", "20"] as const;
export type size = (typeof size)[number];

export interface IconBaseProps {
  readonly color?: keyof typeof colorMap;
  readonly size?: size;
  readonly sizePx?: number;
}

export type IconProps = IconBaseProps & SVGProps<SVGSVGElement>;
