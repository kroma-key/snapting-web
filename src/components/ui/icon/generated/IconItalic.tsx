import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconItalic = (
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
        d="M9 4a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-3.96l-4 14H14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h3.96l4-14H10a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconItalic);
const Memo = memo(ForwardRef);
export default Memo;
