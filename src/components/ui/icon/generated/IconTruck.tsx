import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconTruck = (
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
        d="M1 2a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h1.337a3.5 3.5 0 1 0 6.326 0h6.674a3.5 3.5 0 1 0 6.326 0H23a1 1 0 0 0 1-1v-5a1 1 0 0 0-.293-.707l-3-3A1 1 0 0 0 20 7h-3V3a1 1 0 0 0-1-1zm21 13v-3.586L19.586 9H17v6zm-3.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M4 18.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M15 15H2V4h13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconTruck);
const Memo = memo(ForwardRef);
export default Memo;
