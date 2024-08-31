import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconChrome = (
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
        d="M1 12c0-2.413.777-4.645 2.095-6.458a1 1 0 0 1 .11-.148A10.98 10.98 0 0 1 12 1a11 11 0 0 1 10.11 6.66c.573 1.332.89 2.799.89 4.34 0 6.075-4.925 11-11 11a11 11 0 0 1-1.3-.076C5.238 22.281 1 17.635 1 12m11-9a8.98 8.98 0 0 0-6.842 3.152l2.244 3.881A5 5 0 0 1 12 7h7.485A8.99 8.99 0 0 0 12 3m.587 17.981A9 9 0 0 0 20.487 9H16c.628.836 1 1.874 1 3 0 .984-.284 1.902-.776 2.676zm.008-4.016-2.24 3.885C6.17 20.077 3 16.408 3 12c0-1.43.333-2.782.927-3.982l3.64 6.298a5 5 0 0 0 5.028 2.649m2.042-3.533q-.023.033-.043.068l-.076.132a2.998 2.998 0 0 1-5.076-.064l-.036-.069-.08-.136a3 3 0 1 1 5.31.069"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconChrome);
const Memo = memo(ForwardRef);
export default Memo;
