import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMousePointer = (
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
        d="M3.385 2.077a1 1 0 0 0-1.308 1.308l7.07 16.97a1 1 0 0 0 1.87-.063l1.993-5.868 5.283 5.283a1 1 0 1 0 1.414-1.414l-5.283-5.283 5.868-1.993a1 1 0 0 0 .063-1.87zm6.59 15.064L4.857 4.857l12.284 5.118-4.883 1.658a1 1 0 0 0-.625.625z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMousePointer);
const Memo = memo(ForwardRef);
export default Memo;
