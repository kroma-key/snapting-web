import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconTag = (
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
      <path fill={fill} d="M7 6a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2z" />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 .293.707l8.59 8.58a3 3 0 0 0 4.244 0l7.17-7.17-.707-.707.71.705a3 3 0 0 0 0-4.23l-8.593-8.592A1 1 0 0 0 12 1zm17.882 11.704-.001.001-7.168 7.168a1 1 0 0 1-1.415 0h-.001L3 11.584V3h8.586l8.295 8.295a1 1 0 0 1 0 1.41"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconTag);
const Memo = memo(ForwardRef);
export default Memo;
