import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconSunrise = (
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
        d="M12.707 1.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 4.414V9a1 1 0 1 0 2 0V4.414l2.293 2.293a1 1 0 1 0 1.414-1.414zM12 12a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 1 1 8 0 1 1 0 1 0 2 0 6 6 0 0 0-6-6M3.513 9.513a1 1 0 0 1 1.414 0l1.42 1.42a1 1 0 1 1-1.414 1.414l-1.42-1.42a1 1 0 0 1 0-1.414M1 17a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM20 18a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M20.487 10.927a1 1 0 0 0-1.414-1.414l-1.42 1.42a1 1 0 0 0 1.414 1.414zM0 22a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconSunrise);
const Memo = memo(ForwardRef);
export default Memo;
