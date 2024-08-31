import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconUsers = (
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
        d="M9 2a5 5 0 1 0 0 10A5 5 0 0 0 9 2M6 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        d="M5 14a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-5-5zM19.032 14.88a1 1 0 0 1 1.218-.718A5 5 0 0 1 24 18.999V21a1 1 0 1 1-2 0v-2a3 3 0 0 0-2.25-2.902 1 1 0 0 1-.718-1.218M16.248 2.161a1 1 0 1 0-.496 1.938 3 3 0 0 1 0 5.812 1 1 0 1 0 .496 1.938 5 5 0 0 0 0-9.688"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconUsers);
const Memo = memo(ForwardRef);
export default Memo;
