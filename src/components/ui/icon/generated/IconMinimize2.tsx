import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMinimize2 = (
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
        d="M21.707 3.707 16.414 9H20a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v3.586l5.293-5.293a1 1 0 1 1 1.414 1.414M4 13a1 1 0 1 0 0 2h3.586l-5.293 5.293a1 1 0 1 0 1.414 1.414L9 16.414V20a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMinimize2);
const Memo = memo(ForwardRef);
export default Memo;
