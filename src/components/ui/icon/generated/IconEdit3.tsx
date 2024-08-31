import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconEdit3 = (
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
        d="M18 1.879c-.828 0-1.622.329-2.207.914l-12.5 12.5a1 1 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.212l4-1a1 1 0 0 0 .464-.263l12.5-12.5a3.12 3.12 0 0 0-1.012-5.09A3.1 3.1 0 0 0 18 1.878m-.793 2.328a1.121 1.121 0 0 1 1.586 1.586L6.489 18.097l-2.115.529.529-2.114z"
        clipRule="evenodd"
      />
      <path fill={fill} d="M12 19a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconEdit3);
const Memo = memo(ForwardRef);
export default Memo;
