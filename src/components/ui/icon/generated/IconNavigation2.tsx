import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconNavigation2 = (
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
        d="M12 1a1 1 0 0 1 .938.654l7 19a1 1 0 0 1-1.434 1.214L12 18.152l-6.504 3.716a1 1 0 0 1-1.434-1.214l7-19A1 1 0 0 1 12 1M6.887 18.77l4.617-2.638a1 1 0 0 1 .992 0l4.617 2.638L12 4.893z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconNavigation2);
const Memo = memo(ForwardRef);
export default Memo;
