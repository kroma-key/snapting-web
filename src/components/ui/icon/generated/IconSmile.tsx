import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconSmile = (
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
        d="M7.4 13.2a1 1 0 0 1 1.397.196l.005.006.033.041q.05.061.16.178c.148.153.37.362.656.57.577.42 1.375.809 2.35.809.974 0 1.771-.39 2.348-.809a5 5 0 0 0 .816-.748l.034-.041.004-.006A1 1 0 0 1 16.8 14.6L16 14l.8.6-.001.001-.001.002-.003.004-.007.009-.021.027-.07.086q-.089.107-.248.275a7 7 0 0 1-.923.805c-.798.58-2 1.191-3.526 1.191s-2.728-.61-3.526-1.191a7 7 0 0 1-1.17-1.08l-.07-.086-.022-.027-.007-.01-.003-.003V14.6C7.2 14.601 7.2 14.6 8 14l-.8.6a1 1 0 0 1 .2-1.4M8 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M15 8a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconSmile);
const Memo = memo(ForwardRef);
export default Memo;
