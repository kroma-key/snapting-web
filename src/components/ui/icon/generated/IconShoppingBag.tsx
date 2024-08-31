import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconShoppingBag = (
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
      <path fill={fill} d="M9 10a1 1 0 1 0-2 0 5 5 0 1 0 10 0 1 1 0 1 0-2 0 3 3 0 0 1-6 0" />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M5.2 1.4A1 1 0 0 1 6 1h12a1 1 0 0 1 .8.4l2.994 3.992c.13.168.206.38.206.608v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6c0-.229.077-.44.206-.608zM17.5 3 19 5H5l1.5-2zM4 20V7h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconShoppingBag);
const Memo = memo(ForwardRef);
export default Memo;
