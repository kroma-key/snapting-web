import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCornerLeftUp = (
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
        d="M9.707 3.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L8 6.414V16a5 5 0 0 0 5 5h7a1 1 0 1 0 0-2h-7a3 3 0 0 1-3-3V6.414l3.293 3.293a1 1 0 0 0 1.414-1.414z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCornerLeftUp);
const Memo = memo(ForwardRef);
export default Memo;
