import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconTrendingUp = (
  { size = "24", sizePx, color = "currentColor", ...props }: IconProps,
  ref: Ref<SVGSVGElement>,
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size);
  const fill = color && colorMap[color];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={finalSize}
      height={finalSize}
      fill={fill}
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#icon-trending-up_svg__a)">
        <path
          fill={fill}
          d="M17 5a1 1 0 1 0 0 2h3.586L13.5 14.086 9.207 9.793a1 1 0 0 0-1.414 0l-7.5 7.5a1 1 0 1 0 1.414 1.414L8.5 11.914l4.293 4.293a1 1 0 0 0 1.414 0L22 8.414V12a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1z"
        />
      </g>
      <defs>
        <clipPath id="icon-trending-up_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconTrendingUp);
const Memo = memo(ForwardRef);
export default Memo;
