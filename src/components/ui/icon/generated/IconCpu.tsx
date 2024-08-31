import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCpu = (
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
      <g fill={fill} fillRule="evenodd" clipPath="url(#icon-cpu_svg__a)" clipRule="evenodd">
        <path d="M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm1 6v-4h4v4z" />
        <path d="M9 0a1 1 0 0 1 1 1v2h4V1a1 1 0 1 1 2 0v2h2a3 3 0 0 1 3 3v2h2a1 1 0 1 1 0 2h-2v3h2a1 1 0 1 1 0 2h-2v3a3 3 0 0 1-3 3h-2v2a1 1 0 1 1-2 0v-2h-4v2a1 1 0 1 1-2 0v-2H6a3 3 0 0 1-3-3v-3H1a1 1 0 1 1 0-2h2v-3H1a1 1 0 1 1 0-2h2V6a3 3 0 0 1 3-3h2V1a1 1 0 0 1 1-1M5 18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1z" />
      </g>
      <defs>
        <clipPath id="icon-cpu_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCpu);
const Memo = memo(ForwardRef);
export default Memo;
