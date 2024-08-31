import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconComponent = (
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
        d="m16.405 6.405-4.346 4.345-4.404-4.345L12.06 2zM22 12l-4.345 4.405L13.309 12l4.346-4.345zm-11.19 0-4.405 4.405L2 12l4.405-4.345zm5.595 5.655L12.059 22l-4.404-4.345 4.405-4.405z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconComponent);
const Memo = memo(ForwardRef);
export default Memo;
