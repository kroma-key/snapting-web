import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconSkipBack = (
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
        d="M20 4a1 1 0 0 0-1.625-.78l-10 8a1 1 0 0 0 0 1.56l10 8A1 1 0 0 0 20 20zm-2 13.92L10.6 12 18 6.08z"
        clipRule="evenodd"
      />
      <path fill={fill} d="M6 5a1 1 0 1 0-2 0v14a1 1 0 1 0 2 0z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconSkipBack);
const Memo = memo(ForwardRef);
export default Memo;
