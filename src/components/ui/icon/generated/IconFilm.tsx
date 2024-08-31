import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconFilm = (
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
      <path
        fill={fill}
        fillRule="evenodd"
        d="M1 4.18v15.64A3.18 3.18 0 0 0 4.18 23h15.64A3.18 3.18 0 0 0 23 19.82V4.18A3.18 3.18 0 0 0 19.82 1H4.18A3.18 3.18 0 0 0 1 4.18m2 0C3 3.528 3.528 3 4.18 3H6v3H3zM3 8h3v3H3zm18-2V4.18A1.18 1.18 0 0 0 19.82 3H18v3zm-3 2h3v3h-3zm-2-5H8v8h8zm5 10v3h-3v-3zm0 5h-3v3h1.82A1.18 1.18 0 0 0 21 19.82zm-5-5v8H8v-8zM3 18v1.82c0 .652.528 1.18 1.18 1.18H6v-3zm3-2H3v-3h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconFilm);
const Memo = memo(ForwardRef);
export default Memo;
