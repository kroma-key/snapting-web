import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCloudRain = (
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
      <g fill={fill} clipPath="url(#icon-cloud-rain_svg__a)">
        <path d="M12.263.615a9 9 0 0 0-8.887 15.416 1 1 0 1 0 1.248-1.562A7 7 0 1 1 15.772 7.25a1 1 0 0 0 .968.75H18a4 4 0 0 1 1.599 7.664 1 1 0 0 0 .802 1.832A6 6 0 0 0 18.001 6h-.522A9 9 0 0 0 12.263.615" />
        <path d="M9 13a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0zM17 13a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0zM12 14a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1" />
      </g>
      <defs>
        <clipPath id="icon-cloud-rain_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCloudRain);
const Memo = memo(ForwardRef);
export default Memo;
