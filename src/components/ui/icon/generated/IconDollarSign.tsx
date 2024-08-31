import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconDollarSign = (
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
        d="M13 1a1 1 0 1 0-2 0v3H9.5a4.5 4.5 0 0 0 0 9H11v5H6a1 1 0 1 0 0 2h5v3a1 1 0 1 0 2 0v-3h1.5a4.5 4.5 0 1 0 0-9H13V6h4a1 1 0 1 0 0-2h-4zm-2 5H9.5a2.5 2.5 0 1 0 0 5H11zm2 7v5h1.5a2.5 2.5 0 0 0 0-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconDollarSign);
const Memo = memo(ForwardRef);
export default Memo;
