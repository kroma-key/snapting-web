import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconVolume1 = (
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
        d="M12 5a1 1 0 0 0-1.625-.78L5.65 8H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.725 3.78A1 1 0 0 0 12 19zM6.625 9.78 10 7.08v9.84l-3.375-2.7A1 1 0 0 0 6 14H3v-4h3a1 1 0 0 0 .625-.22"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        d="M16.247 7.753a1 1 0 0 0-1.414 1.414 4 4 0 0 1 0 5.656 1 1 0 0 0 1.414 1.414 6 6 0 0 0 0-8.484"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconVolume1);
const Memo = memo(ForwardRef);
export default Memo;
