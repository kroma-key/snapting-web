import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconArrowUp = (
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
        d="M12.707 4.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 1 0 1.414 1.414L11 7.414V19a1 1 0 1 0 2 0V7.414l5.293 5.293a1 1 0 0 0 1.414-1.414z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconArrowUp);
const Memo = memo(ForwardRef);
export default Memo;
