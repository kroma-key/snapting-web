import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconFastForward = (
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
        d="M2.614 4.21A1 1 0 0 0 1 5v14a1 1 0 0 0 1.614.79l9-7A1 1 0 0 0 12 12v7a1 1 0 0 0 1.614.79l9-7a1 1 0 0 0 0-1.58l-9-7A1 1 0 0 0 12 5v7a1 1 0 0 0-.386-.79zM9.37 12 3 16.955v-9.91zm11 0L14 16.955v-9.91z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconFastForward);
const Memo = memo(ForwardRef);
export default Memo;
