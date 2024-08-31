import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMessageSquare = (
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
        d="M5 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.707.707L7.414 18H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-.707 2.293A1 1 0 0 1 5 4h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 0-.707.293L4 18.586V5a1 1 0 0 1 .293-.707"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMessageSquare);
const Memo = memo(ForwardRef);
export default Memo;
