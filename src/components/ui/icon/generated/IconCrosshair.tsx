import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCrosshair = (
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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m12 8.945V18a1 1 0 1 0-2 0v2.945A9.004 9.004 0 0 1 3.055 13H6a1 1 0 1 0 0-2H3.055A9.004 9.004 0 0 1 11 3.055V6a1 1 0 1 0 2 0V3.055A9.004 9.004 0 0 1 20.945 11H18a1 1 0 1 0 0 2h2.945A9.004 9.004 0 0 1 13 20.945"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCrosshair);
const Memo = memo(ForwardRef);
export default Memo;
