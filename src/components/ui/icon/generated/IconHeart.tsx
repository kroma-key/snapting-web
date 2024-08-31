import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconHeart = (
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
        d="M10.513 5.363a4.659 4.659 0 1 0-6.588 6.588l.78.78.036.04 7.26 7.258 7.258-7.258.037-.04.78-.78a4.659 4.659 0 0 0-6.59-6.588l-.779.78a1 1 0 0 1-1.414 0zm10.236 8.744-.038.04-8.003 8.002a1 1 0 0 1-.707.293h-.002a1 1 0 0 1-.707-.293l-8.003-8.003-.037-.04-.742-.74a6.659 6.659 0 1 1 9.418-9.418l.072.073.073-.073a6.659 6.659 0 1 1 9.417 9.418z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconHeart);
const Memo = memo(ForwardRef);
export default Memo;
