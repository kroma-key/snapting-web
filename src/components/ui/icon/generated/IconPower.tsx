import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconPower = (
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
      <path fill={fill} d="M13 2a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z" />
      <path
        fill={fill}
        d="M6.337 7.347a1 1 0 0 0-1.414-1.414 10 10 0 1 0 14.144 0 1 1 0 1 0-1.414 1.414 8 8 0 1 1-11.316 0"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconPower);
const Memo = memo(ForwardRef);
export default Memo;
