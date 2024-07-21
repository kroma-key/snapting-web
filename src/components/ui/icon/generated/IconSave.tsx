import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconSave = (
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
        d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 16 2zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7h1a1 1 0 0 0 1-1V8.414L15.586 4H8v3h7a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1V4zm3 10v6h8v-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconSave);
const Memo = memo(ForwardRef);
export default Memo;
