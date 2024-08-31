import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCoffee = (
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
      <path fill={fill} d="M7 1a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0z" />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M1 8a1 1 0 0 1 1-1h17a5 5 0 1 1 0 10 5 5 0 0 1-5 5H6a5 5 0 0 1-5-5zm18 7V9a3 3 0 0 1 0 6m-2-6v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9z"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        d="M10 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M15 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCoffee);
const Memo = memo(ForwardRef);
export default Memo;
