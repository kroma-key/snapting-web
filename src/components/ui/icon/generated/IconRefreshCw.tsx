import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconRefreshCw = (
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
        d="M10.229 4.2a8 8 0 0 1 7.453 2.175L20.526 9H17a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v3.64l-2.947-2.721A10 10 0 0 0 2.567 8.666a1 1 0 0 0 1.886.668A8 8 0 0 1 10.229 4.2M1 13a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-3.639l2.947 2.72a10 10 0 0 0 16.486-3.747 1 1 0 1 0-1.886-.668 8 8 0 0 1-13.229 2.96L3.474 15H7a1 1 0 0 0 0-2z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconRefreshCw);
const Memo = memo(ForwardRef);
export default Memo;
