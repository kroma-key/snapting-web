import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconBellOff = (
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
      <g fill={fill} clipPath="url(#icon-bell-off_svg__a)">
        <path
          fillRule="evenodd"
          d="M1.707.293A1 1 0 0 0 .293 1.707L5.58 6.995 5 8c0 3.352-.717 5.434-1.378 6.645a6 6 0 0 1-.88 1.244 3 3 0 0 1-.305.284l-.003.002A1 1 0 0 0 3 18h13.586l5.707 5.707a1 1 0 0 0 1.414-1.414L17.715 16.3l-.015-.016L6.983 5.568l-.033-.032zm5.29 8.118c-.057 3.419-.812 5.713-1.619 7.193q-.114.21-.229.396h9.437z"
          clipRule="evenodd"
        />
        <path d="M15.307 1.821a7 7 0 0 0-7.192.347 1 1 0 1 0 1.11 1.664A5 5 0 0 1 17 7.996a18.9 18.9 0 0 0 .665 5.268 1 1 0 0 0 1.93-.527A16.9 16.9 0 0 1 19 8.015zM15.307 1.821A7 7 0 0 1 19 7.99zM11.135 20.498a1 1 0 1 0-1.73 1.004 3 3 0 0 0 5.19 0 1 1 0 1 0-1.73-1.004 1 1 0 0 1-1.73 0" />
      </g>
      <defs>
        <clipPath id="icon-bell-off_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconBellOff);
const Memo = memo(ForwardRef);
export default Memo;
