import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconFolder = (
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
        d="M4 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-8.465L9.832 2.445A1 1 0 0 0 9 2zm-.707 2.293A1 1 0 0 1 4 4h4.465l1.703 2.555A1 1 0 0 0 11 7h9a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 .293-.707"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconFolder);
const Memo = memo(ForwardRef);
export default Memo;
