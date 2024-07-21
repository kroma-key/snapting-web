import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconRepeat = (
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
      <g fill={fill} clipPath="url(#icon-repeat_svg__a)">
        <path d="M17.707.293a1 1 0 1 0-1.414 1.414L18.586 4H7a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0V9a3 3 0 0 1 3-3h11.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414zM7.707 14.293a1 1 0 0 1 0 1.414L5.414 18H17a3 3 0 0 0 3-3v-2a1 1 0 1 1 2 0v2a5 5 0 0 1-5 5H5.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0" />
      </g>
      <defs>
        <clipPath id="icon-repeat_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconRepeat);
const Memo = memo(ForwardRef);
export default Memo;
