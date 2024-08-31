import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconHardDrive = (
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
        d="M5 16a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M10 15a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M7.24 3a3 3 0 0 0-2.685 1.664v.001l-3.44 6.87A1 1 0 0 0 1 12v6a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-6.038a1 1 0 0 0-.115-.428l-3.44-6.869v-.001A3 3 0 0 0 16.76 3zm13.14 8-2.724-5.442-.002-.003A1 1 0 0 0 16.76 5H7.24a1 1 0 0 0-.894.555L5.45 5.11l.894.448L3.62 11zM3 13v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconHardDrive);
const Memo = memo(ForwardRef);
export default Memo;
