import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconBookOpen = (
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
        d="M2 2a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h7a2 2 0 0 1 2 2 1 1 0 1 0 2 0 2 2 0 0 1 2-2h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-6a5 5 0 0 0-4 2 5 5 0 0 0-4-2zm11 15.536A4 4 0 0 1 15 17h6V4h-5a3 3 0 0 0-3 3zm-2 0V7a3 3 0 0 0-3-3H3v13h6a4 4 0 0 1 2 .536"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconBookOpen);
const Memo = memo(ForwardRef);
export default Memo;
