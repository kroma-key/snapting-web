import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconLink2 = (
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
        d="M3.172 9.172A4 4 0 0 1 6 8h3a1 1 0 1 0 0-2H6a6 6 0 1 0 0 12h3a1 1 0 1 0 0-2H6a4 4 0 0 1-2.828-6.828M15 6a1 1 0 1 0 0 2h3a4 4 0 1 1 0 8h-3a1 1 0 1 0 0 2h3a6 6 0 0 0 0-12z"
      />
      <path fill={fill} d="M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconLink2);
const Memo = memo(ForwardRef);
export default Memo;
