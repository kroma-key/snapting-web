import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconZoomOut = (
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
      <path fill={fill} d="M8 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M11 20a8.96 8.96 0 0 0 5.618-1.968l3.675 3.675a1 1 0 1 0 1.414-1.414l-3.675-3.675A9 9 0 1 0 11 20m0-16a7 7 0 1 0 4.856 12.042 1 1 0 0 1 .186-.186A7 7 0 0 0 11 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconZoomOut);
const Memo = memo(ForwardRef);
export default Memo;
