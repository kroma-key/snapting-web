import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconRefreshCcw = (
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
        d="M14.212 2.249a10 10 0 0 0-9.265 2.67L2 7.639V4a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H3.474l2.844-2.625.03-.028a8 8 0 0 1 13.2 2.987 1 1 0 1 0 1.885-.668 10 10 0 0 0-7.22-6.417M4.453 14.667a1 1 0 1 0-1.886.667 10 10 0 0 0 16.486 3.748L22 16.36v3.64a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.526l-2.844 2.624-.03.028a8 8 0 0 1-13.2-2.986"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconRefreshCcw);
const Memo = memo(ForwardRef);
export default Memo;
