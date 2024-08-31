import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconArrowDownRight = (
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
        d="M7.707 6.293a1 1 0 0 0-1.414 1.414L14.586 16H7a1 1 0 1 0 0 2h10a1 1 0 0 0 1-1V7a1 1 0 1 0-2 0v7.586z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconArrowDownRight);
const Memo = memo(ForwardRef);
export default Memo;
