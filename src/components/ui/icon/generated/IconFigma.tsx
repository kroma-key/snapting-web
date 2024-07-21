import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconFigma = (
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
        d="M5.672 16q-.184.15-.354.318A4.5 4.5 0 1 0 13 19.5v-3.258a4.5 4.5 0 0 0 2.5.758 4.501 4.501 0 0 0 2.828-8A4.5 4.5 0 0 0 20 5.5 4.5 4.5 0 0 0 15.5 1h-7a4.5 4.5 0 0 0-2.828 8 4.502 4.502 0 0 0 0 7M8.5 3a2.5 2.5 0 1 0 0 5H11V3zM11 17H8.5a2.5 2.5 0 1 0 2.5 2.5zm-2.5-7a2.5 2.5 0 0 0 0 5H11v-5zm4.5 2.5a2.5 2.5 0 1 0 5.001 0 2.5 2.5 0 0 0-5.001 0M15.5 8a2.5 2.5 0 1 0 0-5H13v5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconFigma);
const Memo = memo(ForwardRef);
export default Memo;
