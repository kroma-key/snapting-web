import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconThermometer = (
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
      <g clipPath="url(#icon-thermometer_svg__a)">
        <path
          fill={fill}
          fillRule="evenodd"
          d="M11.5 0A3.5 3.5 0 0 0 8 3.5v10.759a5.5 5.5 0 1 0 7 0V3.5A3.5 3.5 0 0 0 11.5 0m-1.06 2.44A1.5 1.5 0 0 1 13 3.5v11.26a1 1 0 0 0 .444.832 3.5 3.5 0 1 1-3.888 0A1 1 0 0 0 10 14.76V3.5c0-.398.158-.78.44-1.06"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="icon-thermometer_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconThermometer);
const Memo = memo(ForwardRef);
export default Memo;
