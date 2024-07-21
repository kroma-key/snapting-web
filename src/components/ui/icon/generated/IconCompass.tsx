import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCompass = (
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
        d="M17.189 8.076a1 1 0 0 0-1.265-1.265l-6.36 2.12a1 1 0 0 0-.633.633l-2.12 6.36a1 1 0 0 0 1.265 1.265l6.36-2.12a1 1 0 0 0 .633-.633zM9.34 14.66l1.33-3.988 3.988-1.33-1.33 3.988z"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCompass);
const Memo = memo(ForwardRef);
export default Memo;
