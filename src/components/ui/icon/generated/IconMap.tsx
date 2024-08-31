import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMap = (
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
        d="M8 1a1 1 0 0 0-.511.14L.504 5.132A1 1 0 0 0 0 6v16a1 1 0 0 0 1.496.868l6.535-3.734 7.504 3.751a1 1 0 0 0 .976-.026l6.985-3.99A1 1 0 0 0 24 18V2a1 1 0 0 0-1.496-.868l-6.536 3.734-7.503-3.751A1 1 0 0 0 8.008 1zm9 19.277 5-2.857V3.723L17 6.58zM15 6.618l-6-3v13.764l6 3zM2 6.58l5-2.857V17.42l-5 2.857z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMap);
const Memo = memo(ForwardRef);
export default Memo;
