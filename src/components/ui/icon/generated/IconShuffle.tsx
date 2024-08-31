import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconShuffle = (
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
        d="M15 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V5.414L4.707 20.707a1 1 0 0 1-1.414-1.414L18.586 4H16a1 1 0 0 1-1-1M22 16a1 1 0 1 0-2 0v2.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L18.586 20H16a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1zM4.707 3.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414-1.414z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconShuffle);
const Memo = memo(ForwardRef);
export default Memo;
