import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconPaperclip = (
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
        d="M15.78 2.388c-.796 0-1.56.316-2.123.879l-9.19 9.19a5.003 5.003 0 0 0 7.076 7.076l9.19-9.19a1 1 0 0 1 1.414 1.414l-9.19 9.19a7.003 7.003 0 1 1-9.904-9.904l9.19-9.19a5.002 5.002 0 0 1 7.074 7.074l-9.2 9.19a3.001 3.001 0 0 1-4.244-4.244l8.49-8.48a1 1 0 1 1 1.414 1.414l-8.49 8.48a1.003 1.003 0 0 0 .708 1.709 1 1 0 0 0 .708-.293l9.2-9.19a3.003 3.003 0 0 0-2.123-5.125"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconPaperclip);
const Memo = memo(ForwardRef);
export default Memo;
