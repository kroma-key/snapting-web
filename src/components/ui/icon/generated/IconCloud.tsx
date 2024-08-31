import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCloud = (
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
        d="M9 5a7 7 0 0 0 0 14h9a4 4 0 0 0 0-8h-1.252a1 1 0 0 1-.969-.75A7 7 0 0 0 9 5m-9 7a9 9 0 0 1 17.488-3H18a6 6 0 0 1 0 12H9a9 9 0 0 1-9-9"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCloud);
const Memo = memo(ForwardRef);
export default Memo;
