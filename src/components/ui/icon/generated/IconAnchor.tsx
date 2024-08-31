import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconAnchor = (
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
        d="M16 5a4 4 0 0 1-3 3.874v12.07A9 9 0 0 0 20.944 13H19a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1 11 11 0 1 1-22 0 1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H3.056A9 9 0 0 0 11 20.944V8.874A4.002 4.002 0 0 1 12 1a4 4 0 0 1 4 4m-4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconAnchor);
const Memo = memo(ForwardRef);
export default Memo;
