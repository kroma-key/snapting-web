import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconDelete = (
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
      <g fill={fill} clipPath="url(#icon-delete_svg__a)">
        <path d="M18.707 8.293a1 1 0 0 1 0 1.414L16.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L15 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L13.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414L15 10.586l2.293-2.293a1 1 0 0 1 1.414 0" />
        <path
          fillRule="evenodd"
          d="M7.247 3.342A1 1 0 0 1 8 3h13a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a1 1 0 0 1-.753-.341l-7-8a1 1 0 0 1 0-1.318zM8.454 5l-6.125 7 6.125 7H21a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="icon-delete_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconDelete);
const Memo = memo(ForwardRef);
export default Memo;
