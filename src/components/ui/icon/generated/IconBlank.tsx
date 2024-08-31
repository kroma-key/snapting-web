import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconBlank = (
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
        d="M4 4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zM4 8a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zM3 19a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M5 13a1 1 0 1 0 0 2h.049a1 1 0 1 0 0-2zM8.451 13a1 1 0 1 0 0 2h.098a1 1 0 1 0 0-2zM11.951 13a1 1 0 1 0 0 2h.098a1 1 0 1 0 0-2zM15.451 13a1 1 0 1 0 0 2h.098a1 1 0 1 0 0-2zM18.951 13a1 1 0 1 0 0 2H19a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconBlank);
const Memo = memo(ForwardRef);
export default Memo;
