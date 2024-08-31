import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCameraOff = (
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
      <g fill={fill} clipPath="url(#icon-camera-off_svg__a)">
        <path
          fillRule="evenodd"
          d="M1.707.293A1 1 0 0 0 .293 1.707L3.586 5H3a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h17.586l1.707 1.707a1 1 0 0 0 1.414-1.414l-2-2-5.706-5.706-.026-.027-5.535-5.535L10.413 9zM18.586 20l-3.262-3.262a5 5 0 0 1-5.043.986 5 5 0 0 1-2.019-8.048L5.586 7H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1zM9.68 11.094a3 3 0 0 0-.523 2.946 3 3 0 0 0 4.749 1.28z"
          clipRule="evenodd"
        />
        <path d="M9 2a1 1 0 0 0 0 2h5.465l1.703 2.555A1 1 0 0 0 17 7h4a1 1 0 0 1 1 1v9.34a1 1 0 1 0 2 0V8a3 3 0 0 0-3-3h-3.465l-1.703-2.555A1 1 0 0 0 15 2z" />
      </g>
      <defs>
        <clipPath id="icon-camera-off_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCameraOff);
const Memo = memo(ForwardRef);
export default Memo;
