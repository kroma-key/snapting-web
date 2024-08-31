import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCards = (
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
        d="M16 2H8a3 3 0 0 0-2.83 2H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1.17A3 3 0 0 0 8 22h8a3 3 0 0 0 2.83-2H20a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1.17A3 3 0 0 0 16 2m3 4v12h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM5 18V6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1zM7 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCards);
const Memo = memo(ForwardRef);
export default Memo;
