import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCommand = (
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
        d="M6 2a4 4 0 0 0 0 8h2v4H6a4 4 0 1 0 4 4v-2h4v2a4 4 0 1 0 4-4h-2v-4h2a4 4 0 1 0-4-4v2h-4V6a4 4 0 0 0-4-4m2 4v2H6a2 2 0 1 1 2-2m2 8v-4h4v4zm-4 2h2v2a2 2 0 1 1-2-2m10 2v-2h2a2 2 0 1 1-2 2m2-10h-2V6a2 2 0 1 1 2 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCommand);
const Memo = memo(ForwardRef);
export default Memo;
