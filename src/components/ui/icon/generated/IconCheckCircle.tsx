import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCheckCircle = (
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
        d="M10.017 3.215a9 9 0 0 1 5.646.558 1 1 0 1 0 .814-1.827A11 11 0 1 0 23 12v-.92a1 1 0 1 0-2 0V12a9 9 0 1 1-10.983-8.785"
      />
      <path
        fill={fill}
        d="M22.708 4.707a1 1 0 0 0-1.415-1.414L12 12.595l-2.293-2.292a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.415 0z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCheckCircle);
const Memo = memo(ForwardRef);
export default Memo;
