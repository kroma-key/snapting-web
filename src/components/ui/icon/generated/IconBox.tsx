import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconBox = (
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
        d="M10.502 1.403a3 3 0 0 1 2.996 0h.002l7 4a3 3 0 0 1 .937.85 1 1 0 0 1 .249.413A3 3 0 0 1 22 7.999V16a3 3 0 0 1-1.5 2.595l-.004.002-6.996 3.998-.002.001a3 3 0 0 1-1.023.363 1 1 0 0 1-.95 0 3 3 0 0 1-1.023-.363l-.002-.001-6.996-3.998-.004-.002A3 3 0 0 1 2 16V7.999a3 3 0 0 1 .314-1.333 1 1 0 0 1 .249-.414 3 3 0 0 1 .937-.848l.004-.002zM13 20.578l6.5-3.714.002-.001a1 1 0 0 0 .498-.864V8.537l-7 4.05zm-2-7.991v7.991l-6.5-3.714-.002-.001A1 1 0 0 1 4 15.999V8.537zm1.504-9.449 6.457 3.69L12 10.855 5.039 6.828l6.457-3.69.004-.002a1 1 0 0 1 1 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconBox);
const Memo = memo(ForwardRef);
export default Memo;
