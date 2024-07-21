import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconWifi = (
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
        d="M2.081 9.75a15 15 0 0 1 19.838 0 1 1 0 1 0 1.322-1.5 17 17 0 0 0-22.482 0 1 1 0 1 0 1.322 1.5"
      />
      <path
        fill={fill}
        d="M5.64 13.318a10 10 0 0 1 12.8 0 1 1 0 1 0 1.28-1.537 12 12 0 0 0-15.36 0 1 1 0 1 0 1.28 1.537"
      />
      <path
        fill={fill}
        d="M12.005 16.001a5 5 0 0 0-2.896.924 1 1 0 0 1-1.158-1.63 7 7 0 0 1 8.108 0 1 1 0 0 1-1.158 1.63 5 5 0 0 0-2.896-.924M12 19a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconWifi);
const Memo = memo(ForwardRef);
export default Memo;
