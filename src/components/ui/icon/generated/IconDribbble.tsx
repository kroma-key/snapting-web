import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconDribbble = (
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
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m-1.889 2.199A9 9 0 0 1 12 3c2.197 0 4.21.787 5.773 2.096-1.286 1.327-2.765 2.319-4.51 3.048-.877-1.598-1.901-3.177-3.152-4.945m-1.977.671a9.02 9.02 0 0 0-4.89 6.039c3.178-.12 5.84-.448 8.102-1.097C10.474 7.26 9.438 5.69 8.134 3.87M3 11.92V12c0 2.211.797 4.236 2.12 5.803 2.331-3.101 4.736-4.971 7.354-5.905h.002q.17-.06.345-.117a33 33 0 0 0-.532-1.163C9.63 11.436 6.559 11.8 3 11.92m3.582 7.268A8.96 8.96 0 0 0 12 21a9 9 0 0 0 3.516-.713c-.653-2.657-1.268-4.779-1.951-6.642a9 9 0 0 0-.42.137c-2.198.784-4.35 2.41-6.563 5.405m10.74.072a9 9 0 0 0 3.528-5.612c-1.957-.452-3.751-.554-5.299-.391.626 1.746 1.19 3.688 1.77 6.003m3.67-7.63a8.96 8.96 0 0 0-1.835-5.087c-1.453 1.485-3.102 2.584-4.98 3.388a32 32 0 0 1 .628 1.404c1.844-.266 3.947-.188 6.188.295"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconDribbble);
const Memo = memo(ForwardRef);
export default Memo;
