import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconBluetooth = (
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
      <g clipPath="url(#icon-bluetooth_svg__a)">
        <path
          fill={fill}
          fillRule="evenodd"
          d="M11.617.076a1 1 0 0 1 1.09.217l5.5 5.5a1 1 0 0 1 0 1.414L13.414 12l4.793 4.793a1 1 0 0 1 0 1.414l-5.5 5.5A1 1 0 0 1 11 23v-8.586l-3.793 3.793a1 1 0 1 1-1.414-1.414L10.586 12 5.793 7.207a1 1 0 0 1 1.414-1.414L11 9.586V1a1 1 0 0 1 .617-.924M13 14.414l3.086 3.086L13 20.586zm0-4.828V3.414L16.086 6.5z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="icon-bluetooth_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconBluetooth);
const Memo = memo(ForwardRef);
export default Memo;
