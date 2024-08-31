import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconLink = (
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
        d="M16.996 1.067a6 6 0 0 0-4.22 1.684l-.011.01-1.72 1.71a1 1 0 0 0 1.41 1.418l1.715-1.705a4 4 0 0 1 5.656 5.655l-2.993 2.994A4.002 4.002 0 0 1 10.8 12.4a1 1 0 0 0-1.602 1.198 6 6 0 0 0 9.048.648l3-3 .012-.012a6 6 0 0 0-4.263-10.168"
      />
      <path
        fill={fill}
        d="M10.425 8.01a6 6 0 0 0-4.672 1.743l-3 3-.012.012a6 6 0 0 0 8.484 8.484l.012-.012 1.71-1.71a1 1 0 0 0-1.414-1.414l-1.704 1.703a4 4 0 0 1-5.655-5.655l2.993-2.994a4 4 0 0 1 6.032.432 1 1 0 1 0 1.602-1.198 6 6 0 0 0-4.376-2.39"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconLink);
const Memo = memo(ForwardRef);
export default Memo;
