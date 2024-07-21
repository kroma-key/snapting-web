import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconAlertOctagon = (
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
        d="M12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M12 15a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M7.153 1.293A1 1 0 0 1 7.86 1h8.28a1 1 0 0 1 .707.293l5.86 5.86A1 1 0 0 1 23 7.86v8.28a1 1 0 0 1-.293.707l-5.86 5.86a1 1 0 0 1-.707.293H7.86a1 1 0 0 1-.707-.293l-5.86-5.86A1 1 0 0 1 1 16.14V7.86a1 1 0 0 1 .293-.707zM8.274 3 3 8.274v7.452L8.274 21h7.452L21 15.726V8.274L15.726 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconAlertOctagon);
const Memo = memo(ForwardRef);
export default Memo;
