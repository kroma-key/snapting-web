import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconHash = (
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
        d="M10.11 2.006a1 1 0 0 1 .884 1.105L10.45 8h3.987l.568-5.111a1 1 0 1 1 1.988.22L16.45 8H20a1 1 0 1 1 0 2h-3.772l-.444 4H20a1 1 0 1 1 0 2h-4.438l-.568 5.11a1 1 0 0 1-1.988-.22L13.55 16H9.562l-.568 5.11a1 1 0 0 1-1.988-.22L7.55 16H4a1 1 0 1 1 0-2h3.772l.444-4H4a1 1 0 0 1 0-2h4.438l.568-5.11a1 1 0 0 1 1.104-.884M13.772 14l.444-4h-3.988l-.444 4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconHash);
const Memo = memo(ForwardRef);
export default Memo;
