import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconRadio = (
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
        d="M5.637 5.637a1 1 0 0 0-1.414-1.414 11 11 0 0 0 0 15.554 1 1 0 1 0 1.414-1.414 9 9 0 0 1 0-12.726m14.14-1.414a1 1 0 0 0-1.414 1.414 9 9 0 0 1 0 12.726 1 1 0 0 0 1.414 1.414 11 11 0 0 0 0-15.554M8.467 8.458a1 1 0 0 0-1.414-1.415 7 7 0 0 0 0 9.905 1 1 0 0 0 1.414-1.415 5 5 0 0 1 0-7.075m8.48-1.405a1 1 0 0 0-1.414 1.415 5 5 0 0 1 0 7.075 1 1 0 0 0 1.414 1.415 7 7 0 0 0 0-9.905M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconRadio);
const Memo = memo(ForwardRef);
export default Memo;
