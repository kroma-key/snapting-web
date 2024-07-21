import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconVideo = (
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
        d="M17 10.057V7a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-3.057l5.419 3.87A1 1 0 0 0 24 17V7a1 1 0 0 0-1.581-.814zM2 7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm20 8.057L17.72 12 22 8.943z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconVideo);
const Memo = memo(ForwardRef);
export default Memo;
