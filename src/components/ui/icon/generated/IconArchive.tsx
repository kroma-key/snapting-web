import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconArchive = (
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
      <path fill={fill} d="M10 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M0 3a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9H1a1 1 0 0 1-1-1zm20 17V9H4v11zm2-13H2V4h20z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconArchive);
const Memo = memo(ForwardRef);
export default Memo;
