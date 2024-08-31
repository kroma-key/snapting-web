import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconKey = (
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
        d="M21.707 2.707a1 1 0 0 0-1.414-1.414l-8.97 8.969a6.5 6.5 0 0 0-8.43 9.82l.007.008a6.5 6.5 0 0 0 9.854-8.43L15.5 8.915l2.293 2.293a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0 0-1.414L20.414 4zm-11.02 9.615.036.035a4.5 4.5 0 1 1-6.395 6.332 4.5 4.5 0 0 1 6.358-6.367M18.5 9.086 16.914 7.5 19 5.414 20.586 7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconKey);
const Memo = memo(ForwardRef);
export default Memo;
