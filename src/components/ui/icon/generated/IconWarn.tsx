import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconWarn = (
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
        d="M12 3a1.75 1.75 0 0 0-1.75 1.75v8.5a1.75 1.75 0 1 0 3.5 0v-8.5A1.75 1.75 0 0 0 12 3M12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconWarn);
const Memo = memo(ForwardRef);
export default Memo;
