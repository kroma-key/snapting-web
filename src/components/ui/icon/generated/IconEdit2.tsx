import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconEdit2 = (
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
        d="M19 1.171a3.83 3.83 0 0 0-2.707 1.122l-13.5 13.5a1 1 0 0 0-.258.444l-1.5 5.5a1 1 0 0 0 1.228 1.228l5.5-1.5a1 1 0 0 0 .444-.258l13.5-13.5A3.828 3.828 0 0 0 19 1.17m-.7 2.14a1.829 1.829 0 0 1 1.993 2.982L6.98 19.605l-3.556.97.97-3.556L17.707 3.707c.17-.17.371-.305.593-.396"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconEdit2);
const Memo = memo(ForwardRef);
export default Memo;
