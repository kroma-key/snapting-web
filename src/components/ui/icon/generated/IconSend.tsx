import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconSend = (
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
        d="M22.707 1.293a1 1 0 0 1 .23 1.058l-6.993 19.98a1 1 0 0 1-1.858.075l-3.844-8.648-8.648-3.844a1 1 0 0 1 .076-1.858l19.979-6.993a1 1 0 0 1 1.058.23M18.194 4.39 4.711 9.112l6.067 2.696zm-6.001 8.83 7.416-7.415-4.72 13.483z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconSend);
const Memo = memo(ForwardRef);
export default Memo;
