import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconChevronRight = (
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
        d="M9.707 5.293a1 1 0 0 0-1.414 1.414L13.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconChevronRight);
const Memo = memo(ForwardRef);
export default Memo;
