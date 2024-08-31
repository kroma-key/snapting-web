import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconActivity = (
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
        d="M9.949 2.684a1 1 0 0 0-1.898 0L5.28 11H2a1 1 0 1 0 0 2h4a1 1 0 0 0 .949-.684L9 6.162l5.051 15.154a1 1 0 0 0 1.898 0L18.72 13H22a1 1 0 1 0 0-2h-4a1 1 0 0 0-.949.684L15 17.838z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconActivity);
const Memo = memo(ForwardRef);
export default Memo;
