import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconAperture = (
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
        d="M10.7 22.924a11.01 11.01 0 0 1-8.81-6.583C1.317 15.009 1 13.541 1 12c0-2.413.777-4.645 2.095-6.458a1 1 0 0 1 .11-.148 10.98 10.98 0 0 1 9.958-4.333A11.01 11.01 0 0 1 22.11 7.66C22.682 8.99 23 10.458 23 12a10.95 10.95 0 0 1-2.095 6.458 1 1 0 0 1-.11.149 10.98 10.98 0 0 1-9.957 4.332 1 1 0 0 1-.138-.015M11.422 7l2.223-3.85A9 9 0 0 1 19.485 7h-8.063m-2.887 5 1.732-3h3.466l1.732 3-1.732 3h-3.466zm6.631 4.517.02-.036L16.62 14l2.222 3.847a8.98 8.98 0 0 1-6.254 3.134zM12.578 17H4.516a9 9 0 0 0 5.839 3.85zm4.916-5.486 2.58 4.467c.593-1.2.926-2.552.926-3.981 0-1.052-.18-2.062-.512-3h-4.446l1.435 2.485zM3 12c0 1.052.18 2.062.512 3h4.446l-1.43-2.476-.027-.046-2.575-4.46A9 9 0 0 0 3 12m2.158-5.847a8.98 8.98 0 0 1 6.253-3.134L7.38 10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconAperture);
const Memo = memo(ForwardRef);
export default Memo;
