import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconSliders = (
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
        d="M4 2a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M5 15h2a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2h2v6a1 1 0 1 0 2 0zM13 12a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0zM12 2a1 1 0 0 1 1 1v4h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V3a1 1 0 0 1 1-1M23 15a1 1 0 1 1 0 2h-2v4a1 1 0 1 1-2 0v-4h-2a1 1 0 1 1 0-2zM20 2a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconSliders);
const Memo = memo(ForwardRef);
export default Memo;
