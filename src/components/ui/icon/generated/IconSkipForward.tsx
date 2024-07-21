import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconSkipForward = (
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
        d="M5.625 3.22A1 1 0 0 0 4 4v16a1 1 0 0 0 1.625.78l10-8a1 1 0 0 0 0-1.56zM13.399 12 6 17.92V6.08z"
        clipRule="evenodd"
      />
      <path fill={fill} d="M20 5a1 1 0 1 0-2 0v14a1 1 0 1 0 2 0z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconSkipForward);
const Memo = memo(ForwardRef);
export default Memo;
