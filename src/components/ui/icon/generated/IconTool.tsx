import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconTool = (
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
        d="M18.882 1.619a7 7 0 0 0-9.521 8.606l-6.448 6.448a3.121 3.121 0 0 0 4.414 4.414l6.448-6.448a7 7 0 0 0 8.606-9.522 1 1 0 0 0-1.618-.294L17 8.586 15.414 7l3.763-3.763a1 1 0 0 0-.295-1.618M15.1 3.077a5 5 0 0 1 1.458-.05l-2.565 2.566-.007.007a2 2 0 0 0 0 2.8l.007.007 1.6 1.6.007.007a2 2 0 0 0 2.8 0l.007-.007 2.565-2.565a5 5 0 0 1-7.03 5.117 1 1 0 0 0-1.119.204l-6.91 6.91a1.121 1.121 0 1 1-1.586-1.586l6.91-6.91a1 1 0 0 0 .204-1.12 5 5 0 0 1 3.66-6.98"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconTool);
const Memo = memo(ForwardRef);
export default Memo;
