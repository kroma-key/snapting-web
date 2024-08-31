import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconDashboard = (
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
        d="M7.293 9.293a1 1 0 0 1 1.414 0l2 2a3 3 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414M12 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M0 14C0 7.373 5.373 2 12 2s12 5.373 12 12c0 2.9-1.03 5.562-2.744 7.637l-.3.363H3.044l-.3-.363A11.95 11.95 0 0 1 0 14m11-9.95V5a1 1 0 1 0 2 0v-.95c2.012.2 3.848.995 5.33 2.208l-.037.035-1 1a1 1 0 0 0 1.414 1.414l1-1 .035-.037A9.95 9.95 0 0 1 21.951 13H21a1 1 0 1 0 0 2h.95A9.94 9.94 0 0 1 20 20H4a9.94 9.94 0 0 1-1.95-5H3a1 1 0 1 0 0-2h-.95A10.004 10.004 0 0 1 11 4.05"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconDashboard);
const Memo = memo(ForwardRef);
export default Memo;
