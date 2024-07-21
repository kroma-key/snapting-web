import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconBarChart2 = (
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
        d="M12 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M18 9a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M7 14a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconBarChart2);
const Memo = memo(ForwardRef);
export default Memo;
