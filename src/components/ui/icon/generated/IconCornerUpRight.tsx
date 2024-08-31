import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCornerUpRight = (
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
        d="M15.707 3.293a1 1 0 1 0-1.414 1.414L17.586 8H8a5 5 0 0 0-5 5v7a1 1 0 1 0 2 0v-7a3 3 0 0 1 3-3h9.586l-3.293 3.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCornerUpRight);
const Memo = memo(ForwardRef);
export default Memo;
