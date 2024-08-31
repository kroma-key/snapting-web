import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconPlaceholder = (
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
        d="M5 2a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2zM16 2a1 1 0 1 0 0 2h3a1 1 0 0 1 1 1v3a1 1 0 1 0 2 0V5a3 3 0 0 0-3-3zM4 16a1 1 0 1 0-2 0v3a3 3 0 0 0 3 3h3a1 1 0 1 0 0-2H5a1 1 0 0 1-1-1zM22 16a1 1 0 1 0-2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 0 0 2h3a3 3 0 0 0 3-3z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconPlaceholder);
const Memo = memo(ForwardRef);
export default Memo;
