import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconVolumeX = (
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
        d="M11.433 4.099A1 1 0 0 1 12 5v14a1 1 0 0 1-1.625.78L5.65 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121M10 7.08l-3.375 2.7A1 1 0 0 1 6 10H3v4h3a1 1 0 0 1 .625.22L10 16.92z"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        d="m20 13.414-2.293 2.293a1 1 0 0 1-1.414-1.414L18.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414L20 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414L21.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconVolumeX);
const Memo = memo(ForwardRef);
export default Memo;
