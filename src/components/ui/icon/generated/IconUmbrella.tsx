import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconUmbrella = (
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
      <g clipPath="url(#icon-umbrella_svg__a)">
        <path
          fill={fill}
          fillRule="evenodd"
          d="M12 1A12.05 12.05 0 0 0 .005 11.905 1 1 0 0 0 1 13h10v6a4 4 0 1 0 8 0 1 1 0 1 0-2 0 2 2 0 0 1-4 0v-6h10a1 1 0 0 0 .995-1.095A12.05 12.05 0 0 0 12 1M5.24 5.614A10.05 10.05 0 0 1 21.839 11H2.16A10.05 10.05 0 0 1 5.24 5.614"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="icon-umbrella_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconUmbrella);
const Memo = memo(ForwardRef);
export default Memo;
