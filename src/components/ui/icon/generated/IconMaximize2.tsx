import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMaximize2 = (
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
        d="M15 2a1 1 0 1 0 0 2h3.586l-5.293 5.293a1 1 0 0 0 1.414 1.414L20 5.414V9a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1zM4 15a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5.414l5.293-5.293a1 1 0 0 0-1.414-1.414L4 18.586z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMaximize2);
const Memo = memo(ForwardRef);
export default Memo;
