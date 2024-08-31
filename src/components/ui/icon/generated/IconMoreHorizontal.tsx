import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMoreHorizontal = (
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
        d="M5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0M17 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMoreHorizontal);
const Memo = memo(ForwardRef);
export default Memo;
