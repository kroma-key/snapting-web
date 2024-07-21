import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconList = (
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
        d="M3 5a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2zM8 5a1 1 0 0 0 0 2h13a1 1 0 1 0 0-2zM8 11a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2zM7 18a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M2 12a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M3 17a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconList);
const Memo = memo(ForwardRef);
export default Memo;
