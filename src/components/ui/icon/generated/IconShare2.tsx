import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconShare2 = (
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
        d="M15.158 7.815a4 4 0 1 0-1.008-1.727L8.842 9.185a4 4 0 1 0 0 5.63l5.309 3.093A4.004 4.004 0 0 0 18 23a4 4 0 1 0-2.839-6.818l-5.31-3.095a4 4 0 0 0 0-2.175zM18 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4M7.7 10.946a1 1 0 0 0 .055.095 1.991 1.991 0 0 1-.055 2.013A1.999 1.999 0 0 1 4 12a2 2 0 0 1 3.7-1.054M16 19c0-.325.078-.632.215-.903a1 1 0 0 0 .123-.21A2 2 0 1 1 16 19"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconShare2);
const Memo = memo(ForwardRef);
export default Memo;
