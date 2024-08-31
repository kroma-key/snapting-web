import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconVideoOff = (
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
      <g fill={fill} clipPath="url(#icon-video-off_svg__a)">
        <path
          fillRule="evenodd"
          d="M1.707.293A1 1 0 0 0 .293 1.707L2.61 4.025A3 3 0 0 0 0 7v10a3 3 0 0 0 3 3h11a3 3 0 0 0 2.76-1.825l5.533 5.532a1 1 0 0 0 1.414-1.414zM15 16.414 4.586 6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"
          clipRule="evenodd"
        />
        <path d="M10.66 6H14a1 1 0 0 1 1 1v3.34a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.293.103L22 8.958V17a1 1 0 1 0 2 0V7a1 1 0 0 0-1.586-.81l-5.31 3.84L17 9.926V7a3 3 0 0 0-3-3h-3.34a1 1 0 1 0 0 2" />
      </g>
      <defs>
        <clipPath id="icon-video-off_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconVideoOff);
const Memo = memo(ForwardRef);
export default Memo;
