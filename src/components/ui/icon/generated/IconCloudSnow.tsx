import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCloudSnow = (
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
      <g fill={fill} clipPath="url(#icon-cloud-snow_svg__a)">
        <path d="M8.082 1.047A9 9 0 0 1 17.48 7h.522a6 6 0 0 1 2.4 11.496 1 1 0 1 1-.802-1.832A4 4 0 0 0 17.999 9H16.74a1 1 0 0 1-.968-.75A7 7 0 1 0 4.624 15.47a1 1 0 0 1-1.248 1.562A9 9 0 0 1 8.082 1.047" />
        <path d="M7 16a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M8 19a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM11 18a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1M12 21a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM15 16a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1M16 19a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" />
      </g>
      <defs>
        <clipPath id="icon-cloud-snow_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCloudSnow);
const Memo = memo(ForwardRef);
export default Memo;
