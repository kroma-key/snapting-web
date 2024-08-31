import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconHome = (
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
        d="M12.614 1.21a1 1 0 0 0-1.228 0l-9 7A1 1 0 0 0 2 9v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a1 1 0 0 0-.386-.79zM16 21h3a1 1 0 0 0 1-1V9.49l-8-6.223-8 6.222V20a1 1 0 0 0 1 1h3v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-6 0v-8h4v8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconHome);
const Memo = memo(ForwardRef);
export default Memo;
