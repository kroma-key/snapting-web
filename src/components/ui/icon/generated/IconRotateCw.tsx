import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconRotateCw = (
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
        d="M8.141 4.996a8 8 0 0 1 9.543 1.372L20.434 9H17a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v3.731l-2.934-2.809a10 10 0 1 0 2.367 10.411 1 1 0 0 0-1.886-.666 8 8 0 1 1-11.406-9.67"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconRotateCw);
const Memo = memo(ForwardRef);
export default Memo;
