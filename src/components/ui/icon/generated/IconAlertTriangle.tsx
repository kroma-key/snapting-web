import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconAlertTriangle = (
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
        d="M12 8a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1M12 16a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2z"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M10.528 2.283a3 3 0 0 1 4.037 1.058l.003.005 8.47 14.14.008.014a3 3 0 0 1-2.565 4.5H3.519a3 3 0 0 1-2.565-4.5l.008-.014 8.47-14.14.858.514-.855-.519a3 3 0 0 1 1.093-1.058m.618 2.094L2.683 18.506A1 1 0 0 0 3.536 20h16.928a1 1 0 0 0 .853-1.494L12.855 4.379l-.001-.002a1 1 0 0 0-1.708 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconAlertTriangle);
const Memo = memo(ForwardRef);
export default Memo;
