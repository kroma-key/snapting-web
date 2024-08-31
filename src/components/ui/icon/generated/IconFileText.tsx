import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconFileText = (
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
        d="M8 12a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM7 17a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M8 8a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M3.879 1.879A3 3 0 0 1 6 1h8a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 21 8v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 .879-2.121M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-5a1 1 0 0 1-1-1V3zm9 1.414L17.586 7H15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconFileText);
const Memo = memo(ForwardRef);
export default Memo;
