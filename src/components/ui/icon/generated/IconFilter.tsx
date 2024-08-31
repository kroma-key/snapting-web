import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconFilter = (
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
        d="M4.125 10.875h8.625v2.25H4.125a1.125 1.125 0 0 1 0-2.25M19.875 13.125H16.5v1.125a1.125 1.125 0 0 1-2.25 0v-4.5a1.125 1.125 0 0 1 2.25 0v1.125h3.375a1.125 1.125 0 0 1 0 2.25M9.75 3.375a1.125 1.125 0 0 0-2.25 0v4.5a1.125 1.125 0 0 0 2.25 0V6.75h10.125a1.125 1.125 0 0 0 0-2.25H9.75zM8.625 15c.621 0 1.125.504 1.125 1.125v1.125h10.125a1.125 1.125 0 0 1 0 2.25H9.75v1.125a1.125 1.125 0 0 1-2.25 0v-4.5c0-.621.504-1.125 1.125-1.125M6 4.5H4.125a1.125 1.125 0 0 0 0 2.25H6zM4.125 17.25H6v2.25H4.125a1.125 1.125 0 0 1 0-2.25"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconFilter);
const Memo = memo(ForwardRef);
export default Memo;
