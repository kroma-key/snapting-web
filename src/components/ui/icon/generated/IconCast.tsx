import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCast = (
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
        d="M3.293 5.293A1 1 0 0 1 4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6a1 1 0 1 0 0 2h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v2a1 1 0 0 0 2 0V6a1 1 0 0 1 .293-.707"
      />
      <path
        fill={fill}
        d="M2.11 11.056a1 1 0 0 0-.22 1.988 8 8 0 0 1 7.066 7.066 1 1 0 0 0 1.988-.22 10 10 0 0 0-8.834-8.834"
      />
      <path
        fill={fill}
        d="M2.2 15.12a1 1 0 1 0-.4 1.96 4 4 0 0 1 3.12 3.12 1 1 0 1 0 1.96-.4 6 6 0 0 0-4.68-4.68M2 19a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCast);
const Memo = memo(ForwardRef);
export default Memo;
