import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconAward = (
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
      <g clipPath="url(#icon-award_svg__a)">
        <path
          fill={fill}
          fillRule="evenodd"
          d="M7.14 14.355a8 8 0 1 1 9.722 0l1.13 8.514a1 1 0 0 1-1.507.989L12 21.166l-4.485 2.692a1 1 0 0 1-1.506-.99zM6 8a6 6 0 1 1 9.33 4.992 1 1 0 0 0-.16.103A6 6 0 0 1 6 8m8.986 7.424A8 8 0 0 1 12 16a8 8 0 0 1-2.985-.575l-.75 5.65 3.22-1.933a1 1 0 0 1 1.03 0l3.22 1.933z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="icon-award_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconAward);
const Memo = memo(ForwardRef);
export default Memo;
