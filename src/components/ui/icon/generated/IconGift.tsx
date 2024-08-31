import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconGift = (
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
        d="M4 4.5A3.5 3.5 0 0 0 4.338 6H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2.338A3.5 3.5 0 0 0 16.5 1c-2.306 0-3.693 1.662-4.439 3.018L12 4.131l-.061-.113C11.193 2.662 9.806 1 7.5 1A3.5 3.5 0 0 0 4 4.5M7.5 3a1.5 1.5 0 0 0 0 3h3.154a8 8 0 0 0-.468-1.018C9.557 3.838 8.694 3 7.5 3m5.846 3H16.5a1.5 1.5 0 0 0 0-3c-1.194 0-2.057.838-2.686 1.982A8 8 0 0 0 13.346 6M13 8v3h8V8zm-2 0v3H3V8zm2 13h6v-8h-6zm-2-8v8H5v-8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconGift);
const Memo = memo(ForwardRef);
export default Memo;
