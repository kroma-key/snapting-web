import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconPieChart = (
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
        d="M12 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1A11 11 0 0 0 12 1m1 10V3.056A9 9 0 0 1 20.944 11z"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        d="M8.4 3.747a1 1 0 0 0-.8-1.834A11 11 0 1 0 22.131 16.28a1 1 0 0 0-1.842-.778A9 9 0 1 1 8.399 3.747"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconPieChart);
const Memo = memo(ForwardRef);
export default Memo;
