import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconRewind = (
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
        d="M12 5a1 1 0 0 0-1.614-.79l-9 7a1 1 0 0 0 0 1.58l9 7A1 1 0 0 0 12 19v-7a1 1 0 0 0 .386.79l9 7A1 1 0 0 0 23 19V5a1 1 0 0 0-1.614-.79l-9 7A1 1 0 0 0 12 12zm-2 11.955L3.629 12 10 7.045zm11 0L14.629 12 21 7.045z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconRewind);
const Memo = memo(ForwardRef);
export default Memo;
