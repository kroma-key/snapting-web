import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconTrendingDown = (
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
      <g clipPath="url(#icon-trending-down_svg__a)">
        <path
          fill={fill}
          d="M1.707 5.293A1 1 0 0 0 .293 6.707l7.5 7.5a1 1 0 0 0 1.414 0L13.5 9.914 20.586 17H17a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1v-6a1 1 0 1 0-2 0v3.586l-7.793-7.793a1 1 0 0 0-1.414 0L8.5 12.086z"
        />
      </g>
      <defs>
        <clipPath id="icon-trending-down_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconTrendingDown);
const Memo = memo(ForwardRef);
export default Memo;
