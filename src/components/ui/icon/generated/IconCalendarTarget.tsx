import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCalendarTarget = (
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
        d="M17 2a1 1 0 1 0-2 0v1H9V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v7h2v-2h16v9a1 1 0 0 1-1 1h-7v2h7a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2zm3 7V6a1 1 0 0 0-1-1h-2v1a1 1 0 1 1-2 0V5H9v1a1 1 0 0 1-2 0V5H5a1 1 0 0 0-1 1v3z"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        d="M6 12.793a1.013 1.013 0 0 1 1.426 0l4.279 4.249a.996.996 0 0 1 0 1.416l-4.279 4.249a1.013 1.013 0 0 1-1.426 0 .996.996 0 0 1 0-1.416l2.557-2.54H1.008A1.005 1.005 0 0 1 0 17.75c0-.553.451-1.001 1.008-1.001h7.549L6 14.209a.996.996 0 0 1 0-1.416"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCalendarTarget);
const Memo = memo(ForwardRef);
export default Memo;
