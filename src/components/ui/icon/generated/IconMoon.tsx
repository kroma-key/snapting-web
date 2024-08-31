import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMoon = (
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
        d="M12.081 2.509a1 1 0 0 1-.067 1.085 6 6 0 0 0 8.392 8.392 1 1 0 0 1 1.59.896A10 10 0 1 1 11.118 2.004a1 1 0 0 1 .963.505m-2.765 1.93a8 8 0 1 0 10.245 10.245A7.999 7.999 0 0 1 9.316 4.439"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMoon);
const Memo = memo(ForwardRef);
export default Memo;
