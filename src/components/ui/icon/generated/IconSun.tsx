import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconSun = (
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
      <g fill={fill} clipPath="url(#icon-sun_svg__a)">
        <path d="M12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1" />
        <path
          fillRule="evenodd"
          d="M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0m6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
          clipRule="evenodd"
        />
        <path d="M13 21a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM3.513 3.513a1 1 0 0 1 1.414 0l1.42 1.42a1 1 0 0 1-1.414 1.414l-1.42-1.42a1 1 0 0 1 0-1.414M19.067 17.653a1 1 0 0 0-1.414 1.414l1.42 1.42a1 1 0 0 0 1.414-1.414zM0 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1M21 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM6.347 17.653a1 1 0 0 1 0 1.414l-1.42 1.42a1 1 0 0 1-1.414-1.414l1.42-1.42a1 1 0 0 1 1.414 0M20.487 4.927a1 1 0 0 0-1.414-1.414l-1.42 1.42a1 1 0 0 0 1.414 1.414z" />
      </g>
      <defs>
        <clipPath id="icon-sun_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconSun);
const Memo = memo(ForwardRef);
export default Memo;
