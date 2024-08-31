import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconAtSign = (
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
        fillRule="evenodd"
        d="M14.5 1.288a11 11 0 1 0 4.188 19.446 1 1 0 0 0-1.216-1.588A9 9 0 1 1 21 12v1a2 2 0 0 1-4 0V8a1 1 0 0 0-2 0 5 5 0 1 0 .74 7.319 4 4 0 0 0 3.26 1.68 4 4 0 0 0 4-4v-1a11 11 0 0 0-8.5-10.71M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconAtSign);
const Memo = memo(ForwardRef);
export default Memo;
