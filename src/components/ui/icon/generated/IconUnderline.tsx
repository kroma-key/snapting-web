import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconUnderline = (
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
        d="M7 3a1 1 0 0 0-2 0v7a7 7 0 1 0 14 0V3a1 1 0 1 0-2 0v7a5 5 0 1 1-10 0zM4 20a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconUnderline);
const Memo = memo(ForwardRef);
export default Memo;
