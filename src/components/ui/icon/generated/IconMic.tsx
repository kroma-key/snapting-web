import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMic = (
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
        d="M12 0a4 4 0 0 0-4 4v8a4 4 0 1 0 8 0V4a4 4 0 0 0-4-4m-1.414 2.586A2 2 0 0 1 14 4v8a2 2 0 0 1-4 0V4a2 2 0 0 1 .586-1.414"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        d="M6 10a1 1 0 1 0-2 0v2a8 8 0 0 0 7 7.937V22H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-2.063A8 8 0 0 0 20 12v-2a1 1 0 1 0-2 0v2a6 6 0 1 1-12 0z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMic);
const Memo = memo(ForwardRef);
export default Memo;
