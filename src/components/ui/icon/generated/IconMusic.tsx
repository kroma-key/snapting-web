import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMusic = (
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
        d="M21.646 2.237A1 1 0 0 1 22 3v13a4 4 0 1 1-2-3.465V4.18L10 5.847V18a4 4 0 1 1-2-3.465V5a1 1 0 0 1 .836-.986l12-2a1 1 0 0 1 .81.223M20 16a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMusic);
const Memo = memo(ForwardRef);
export default Memo;
