import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconImage = (
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
        d="M6 8.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M8.5 8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 .65.937L15.292 9.293a1 1 0 0 1 1.414 0L20 12.586V5a1 1 0 0 0-1-1zm15 11.414-4-4L7.414 20H19a1 1 0 0 0 1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconImage);
const Memo = memo(ForwardRef);
export default Memo;
