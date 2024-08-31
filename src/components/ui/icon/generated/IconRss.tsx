import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconRss = (
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
        d="M3 4a1 1 0 0 1 1-1 17 17 0 0 1 17 17 1 1 0 1 1-2 0A15 15 0 0 0 4 5a1 1 0 0 1-1-1"
      />
      <path
        fill={fill}
        d="M3 11a1 1 0 0 1 1-1 10 10 0 0 1 10 10 1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1M5 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconRss);
const Memo = memo(ForwardRef);
export default Memo;
