import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconPenTool = (
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
        d="M2.077 1.003q.09.007.175.03l14.483 3.495a1 1 0 0 1 .746.776l1.153 5.765a1 1 0 0 1 1.073.224l3 3a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1-.224-1.073L5.304 17.48a1 1 0 0 1-.776-.746L1.032 2.252a1 1 0 0 1 .26-.96 1 1 0 0 1 .785-.289m6.215 8.704L3.806 5.22l2.516 10.425 6.35 1.27 4.243-4.244-1.27-6.349L5.22 3.806l4.487 4.486a3 3 0 1 1-1.414 1.414m1.989.598a1 1 0 1 0 .025-.025l-.013.013zM13.414 19 15 20.586 20.586 15 19 13.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconPenTool);
const Memo = memo(ForwardRef);
export default Memo;
