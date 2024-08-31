import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconZapOff = (
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
      <g fill={fill} clipPath="url(#icon-zap-off_svg__a)">
        <path
          fillRule="evenodd"
          d="M1.707.293A1 1 0 0 0 .293 1.707l6.354 6.354-4.415 5.299A1 1 0 0 0 3 15h7.867l-.86 6.876a1 1 0 0 0 1.761.764l4.3-5.159 6.225 6.226a1 1 0 0 0 1.414-1.414l-6.991-6.991-.016-.016-7.984-7.984-.016-.016zm6.36 9.188L5.135 13h6.45zm4.894 4.894-.546 4.365 2.232-2.679z"
          clipRule="evenodd"
        />
        <path d="M13.992 2.123a1 1 0 0 0-1.76-.763l-2.43 2.92a1 1 0 0 0 1.537 1.28l.248-.3-.17 1.367a1 1 0 1 0 1.985.246zM15.66 9a1 1 0 1 0 0 2h3.202l-1.06 1.269a1 1 0 0 0 1.535 1.282l2.43-2.91A1 1 0 0 0 21 9z" />
      </g>
      <defs>
        <clipPath id="icon-zap-off_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconZapOff);
const Memo = memo(ForwardRef);
export default Memo;
