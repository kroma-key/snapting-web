import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconPrinter = (
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
        d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6h1a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3H4a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h1zm2 19h10v-6H7zm12-4v-3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zM17 3v5H7V3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconPrinter);
const Memo = memo(ForwardRef);
export default Memo;
