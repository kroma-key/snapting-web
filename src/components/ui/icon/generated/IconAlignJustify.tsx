import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconAlignJustify = (
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
        d="M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zM3 9a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zM2 14a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M3 17a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconAlignJustify);
const Memo = memo(ForwardRef);
export default Memo;
