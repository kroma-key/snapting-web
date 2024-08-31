import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconBook = (
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
        d="M21 2a1 1 0 0 0-1-1H6.5A3.5 3.5 0 0 0 3 4.5v15A3.5 3.5 0 0 0 6.5 23H20a1 1 0 0 0 1-1zM5.44 3.44A1.5 1.5 0 0 1 6.5 3H19v13H6.5a3.5 3.5 0 0 0-1.5.338V4.5c0-.398.158-.78.44-1.06M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3H6.5A1.5 1.5 0 0 0 5 19.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconBook);
const Memo = memo(ForwardRef);
export default Memo;
