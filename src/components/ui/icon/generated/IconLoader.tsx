import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconLoader = (
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
        d="M13 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zM13 18a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zM4.223 4.223a1 1 0 0 1 1.414 0l2.83 2.83a1 1 0 0 1-1.414 1.414l-2.83-2.83a1 1 0 0 1 0-1.414M16.947 15.533a1 1 0 0 0-1.414 1.414l2.83 2.83a1 1 0 0 0 1.414-1.414zM1 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M18 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM8.467 15.533a1 1 0 0 1 0 1.414l-2.83 2.83a1 1 0 0 1-1.414-1.414l2.83-2.83a1 1 0 0 1 1.414 0M19.777 5.637a1 1 0 0 0-1.414-1.414l-2.83 2.83a1 1 0 0 0 1.414 1.414z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconLoader);
const Memo = memo(ForwardRef);
export default Memo;
