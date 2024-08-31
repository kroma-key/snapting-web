import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconThumbsUp = (
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
        d="M11 1a1 1 0 0 0-.914.594L6.35 10H4a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h14.275a3 3 0 0 0 2.994-2.55l1.38-9A3.002 3.002 0 0 0 19.655 8H15V5a4 4 0 0 0-4-4m.608 2.095L8 11.212V21h10.291a1 1 0 0 0 1-.85l1.38-9a1 1 0 0 0-1-1.15H14a1 1 0 0 1-1-1V5a2 2 0 0 0-1.392-1.905M6 12v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconThumbsUp);
const Memo = memo(ForwardRef);
export default Memo;
