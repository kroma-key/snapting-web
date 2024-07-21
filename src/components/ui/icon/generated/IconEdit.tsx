import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconEdit = (
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
        d="M20 .879c-.828 0-1.622.329-2.207.914l-9.5 9.5a1 1 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.212l4-1a1 1 0 0 0 .464-.263l9.5-9.5A3.121 3.121 0 0 0 20 .88m-.793 2.328a1.121 1.121 0 0 1 1.586 1.586l-9.304 9.304-2.115.529.529-2.114z"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        d="M4 3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7a1 1 0 0 0-2 0v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h7a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconEdit);
const Memo = memo(ForwardRef);
export default Memo;
