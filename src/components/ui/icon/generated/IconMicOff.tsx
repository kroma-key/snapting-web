import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMicOff = (
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
      <g fill={fill} clipPath="url(#icon-mic-off_svg__a)">
        <path
          fillRule="evenodd"
          d="M1.707.293A1 1 0 0 0 .293 1.707L8 9.414V12a4.003 4.003 0 0 0 4.78 3.92 4 4 0 0 0 1.25-.476l1.476 1.476a6 6 0 0 1-3.212 1.124 1 1 0 0 0-.588 0A6 6 0 0 1 6 12.007V10a1 1 0 1 0-2 0v1.996a8 8 0 0 0 7 7.992V22H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-2.012q.304-.037.606-.1a8 8 0 0 0 3.328-1.54l5.359 5.36a1 1 0 0 0 1.414-1.415l-5.838-5.838a1 1 0 0 0-.374-.374zM12.516 13.93 10 11.414V12a2 2 0 0 0 2.516 1.93"
          clipRule="evenodd"
        />
        <path d="M19 9a1 1 0 0 1 1 1v2c0 .471-.043.943-.126 1.407a1 1 0 1 1-1.968-.354Q17.999 12.53 18 12V10a1 1 0 0 1 1-1M12 0a4 4 0 0 0-4 4 1 1 0 1 0 2 0 2 2 0 1 1 4 0v5a1 1 0 1 0 2 0V4a4 4 0 0 0-4-4" />
      </g>
      <defs>
        <clipPath id="icon-mic-off_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMicOff);
const Memo = memo(ForwardRef);
export default Memo;
