import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMail = (
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
        d="M1 5.983V18c0 1.652 1.348 3 3 3h16c1.652 0 3-1.348 3-3V5.982A3.006 3.006 0 0 0 20 3H4a3.006 3.006 0 0 0-3 2.983m2.107-.429C3.272 5.227 3.612 5 4 5h16c.388 0 .728.227.893.554L12 11.779zM21 7.921V18c0 .548-.452 1-1 1H4c-.548 0-1-.452-1-1V7.92l8.427 5.9a1 1 0 0 0 1.146 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMail);
const Memo = memo(ForwardRef);
export default Memo;
