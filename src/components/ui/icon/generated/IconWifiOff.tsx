import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconWifiOff = (
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
      <g fill={fill} clipPath="url(#icon-wifi-off_svg__a)">
        <path d="M.293.293a1 1 0 0 1 1.414 0l5.106 5.106.029.028 3.946 3.947q.095.074.17.17l12.75 12.749a1 1 0 0 1-1.415 1.414l-6.617-6.616a1 1 0 0 1-.775-.166 5 5 0 0 0-5.792 0 1 1 0 1 1-1.158-1.63 7 7 0 0 1 4.663-1.267l-2.782-2.782a9.94 9.94 0 0 0-4.19 2.071 1 1 0 1 1-1.283-1.534A11.9 11.9 0 0 1 8.21 9.626L5.888 7.302a14.9 14.9 0 0 0-3.806 2.447A1 1 0 0 1 .758 8.251 17 17 0 0 1 4.386 5.8L.293 1.706a1 1 0 0 1 0-1.414M15.821 10.621a1 1 0 0 1 1.338-.46c.893.437 1.73.983 2.488 1.627a1 1 0 0 1-1.294 1.524 10 10 0 0 0-2.072-1.353 1 1 0 0 1-.46-1.338M16.731 6.766a15 15 0 0 0-5.94-.72 1 1 0 0 1-.161-1.993A17 17 0 0 1 23.24 8.25a1 1 0 1 1-1.323 1.5 15 15 0 0 0-5.187-2.984" />
        <path d="M12 19a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" />
      </g>
      <defs>
        <clipPath id="icon-wifi-off_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconWifiOff);
const Memo = memo(ForwardRef);
export default Memo;
