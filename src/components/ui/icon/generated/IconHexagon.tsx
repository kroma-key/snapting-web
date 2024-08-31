import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconHexagon = (
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
        d="M12 1.002a3 3 0 0 0-1.498.4l-6.998 4-.004.002A3 3 0 0 0 2 7.999V16a3 3 0 0 0 1.5 2.595l.004.002 6.996 3.998.002.001a3 3 0 0 0 2.996 0l.002-.001 6.996-3.998.004-.002A3 3 0 0 0 22 16V7.999a3 3 0 0 0-1.5-2.595l-7-4-.002-.001A3 3 0 0 0 12 1.002m-.5 2.134a1 1 0 0 1 1 0l.004.002L19.5 7.136h.002a1 1 0 0 1 .498.865v7.998a1 1 0 0 1-.498.864H19.5l-6.996 3.999-.004.002a1 1 0 0 1-1 0l-7-4-.002-.001A1 1 0 0 1 4 15.999V8.001a1 1 0 0 1 .498-.864l.002-.001 6.996-3.998z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconHexagon);
const Memo = memo(ForwardRef);
export default Memo;
