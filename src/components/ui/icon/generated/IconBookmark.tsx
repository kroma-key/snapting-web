import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconBookmark = (
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
        d="M7 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.581.814L12 17.229l6.419 4.585A1 1 0 0 0 20 21V5a3 3 0 0 0-3-3zm-.707 2.293A1 1 0 0 1 7 4h10a1 1 0 0 1 1 1v14.057l-5.419-3.87a1 1 0 0 0-1.162 0L6 19.056V5a1 1 0 0 1 .293-.707"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconBookmark);
const Memo = memo(ForwardRef);
export default Memo;
