import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconAirplay = (
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
        d="M3.293 4.293A1 1 0 0 1 4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1a1 1 0 1 0 0-2H4a1 1 0 0 1-1-1V5a1 1 0 0 1 .293-.707"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M12.768 14.36a1 1 0 0 0-1.536 0l-5 6A1 1 0 0 0 7 22h10a1 1 0 0 0 .768-1.64zM12 16.562 14.865 20h-5.73z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconAirplay);
const Memo = memo(ForwardRef);
export default Memo;
