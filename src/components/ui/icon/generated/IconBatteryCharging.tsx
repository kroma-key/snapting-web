import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconBatteryCharging = (
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
        d="M11.832 6.555a1 1 0 0 0-1.664-1.11l-4 6A1 1 0 0 0 7 13h4.132l-2.964 4.445a1 1 0 0 0 1.664 1.11l4-6A1 1 0 0 0 13 11H8.869z"
      />
      <path
        fill={fill}
        d="M3 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3.19a1 1 0 1 1 0 2zM14 6a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.19a1 1 0 1 1 0-2H17a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1M23 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconBatteryCharging);
const Memo = memo(ForwardRef);
export default Memo;
