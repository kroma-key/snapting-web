import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconPocket = (
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
        d="M8.707 9.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L12 12.586z"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M20 2H4a3 3 0 0 0-3 3v6a11 11 0 1 0 22 0V5a3 3 0 0 0-3-3M3.293 4.293A1 1 0 0 1 4 4h16a1 1 0 0 1 1 1v6a9 9 0 0 1-18 0V5a1 1 0 0 1 .293-.707"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconPocket);
const Memo = memo(ForwardRef);
export default Memo;
