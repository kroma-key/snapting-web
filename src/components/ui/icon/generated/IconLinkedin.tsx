import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconLinkedin = (
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
        d="M4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M16 7a7 7 0 0 0-7 7v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a7 7 0 0 0-7-7m0 2a5 5 0 0 0-5 5v6h2v-6a3 3 0 0 1 6 0v6h2v-6a5 5 0 0 0-5-5M1 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm2 1v10h2V10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconLinkedin);
const Memo = memo(ForwardRef);
export default Memo;
