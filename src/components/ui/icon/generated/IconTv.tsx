import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconTv = (
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
        d="M7.707 1.293a1 1 0 0 0-1.414 1.414L9.586 6H4a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.586l3.293-3.293a1 1 0 0 0-1.414-1.414L12 5.586zM3 9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconTv);
const Memo = memo(ForwardRef);
export default Memo;
