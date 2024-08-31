import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconLifeBuoy = (
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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m3.968-5.618A8.96 8.96 0 0 0 3 12c0 2.125.736 4.078 1.968 5.618l2.86-2.86A4.98 4.98 0 0 1 7 12c0-1.02.305-1.967.828-2.757zm4.275 9.79-2.86 2.86A8.96 8.96 0 0 0 12 21a8.96 8.96 0 0 0 5.618-1.968l-2.86-2.86A4.98 4.98 0 0 1 12 17a4.98 4.98 0 0 1-2.757-.828M21 12a8.96 8.96 0 0 1-1.968 5.618l-2.86-2.86c.523-.791.828-1.739.828-2.758 0-1.02-.305-1.967-.828-2.757l2.86-2.86A8.96 8.96 0 0 1 21 12m-3.382-7.032-2.86 2.86A4.98 4.98 0 0 0 12 7c-1.02 0-1.967.305-2.757.828l-2.86-2.86A8.96 8.96 0 0 1 12 3c2.125 0 4.078.736 5.618 1.968M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconLifeBuoy);
const Memo = memo(ForwardRef);
export default Memo;
