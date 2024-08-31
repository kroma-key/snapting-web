import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconRotateCcw = (
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
        d="M16.837 3.258a10 10 0 0 0-11.89 1.66L2 7.64v-3.64a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H3.474l2.844-2.624.029-.027a8 8 0 1 1-1.894 8.32 1 1 0 0 0-1.886.664 10 10 0 1 0 14.27-12.074"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconRotateCcw);
const Memo = memo(ForwardRef);
export default Memo;
