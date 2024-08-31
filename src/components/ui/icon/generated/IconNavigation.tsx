import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconNavigation = (
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
        d="M22.707 1.293a1 1 0 0 1 .197 1.135l-9 19a1 1 0 0 1-1.874-.185l-1.855-7.418-7.418-1.855a1 1 0 0 1-.185-1.874l19-9a1 1 0 0 1 1.135.197M5.953 10.708l5.29 1.322a1 1 0 0 1 .727.728l1.322 5.289 6.606-13.945z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconNavigation);
const Memo = memo(ForwardRef);
export default Memo;
