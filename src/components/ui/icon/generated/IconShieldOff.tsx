import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconShieldOff = (
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
      <g fill={fill} clipPath="url(#icon-shield-off_svg__a)">
        <path
          fillRule="evenodd"
          d="M1.707.293A1 1 0 0 0 .293 1.707l2.824 2.824A1 1 0 0 0 3 5v7c0 3.446 2.282 6.2 4.342 8.003a22.7 22.7 0 0 0 4.103 2.836l.076.04.022.01.006.004h.002s.002.001.449-.893l-.447.894a1 1 0 0 0 .914-.01 21.3 21.3 0 0 0 5.173-3.83l4.653 4.653a1 1 0 0 0 1.414-1.414l-5.375-5.375-.008-.008L5.453 4.039l-.03-.03zM5 6.414V12c0 2.554 1.718 4.8 3.659 6.497a20.7 20.7 0 0 0 3.34 2.365 19.3 19.3 0 0 0 4.227-3.222z"
          clipRule="evenodd"
        />
        <path d="M11.65 1.063a1 1 0 0 1 .701 0l8 3a1 1 0 0 1 .65.937v7.007a7.9 7.9 0 0 1-.356 2.29 1 1 0 1 1-1.91-.593A5.9 5.9 0 0 0 19 11.997V5.693l-7-2.625-2.81 1.049a1 1 0 0 1-.7-1.874z" />
      </g>
      <defs>
        <clipPath id="icon-shield-off_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconShieldOff);
const Memo = memo(ForwardRef);
export default Memo;
