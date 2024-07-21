import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconInstagram = (
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
        d="M9.74 7.519a5 5 0 1 1 4.606 8.876A5 5 0 0 1 9.74 7.519m2.743 1.47a3 3 0 1 0-.88 5.936 3 3 0 0 0 .88-5.936"
        clipRule="evenodd"
      />
      <path fill={fill} d="M17.5 5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M1 7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6zm6-4a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconInstagram);
const Memo = memo(ForwardRef);
export default Memo;
