import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconScissors = (
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
        d="M9.446 8.032a4 4 0 1 0-1.414 1.414L10.586 12l-2.554 2.554a4 4 0 1 0 1.414 1.414l11.261-11.26a1 1 0 0 0-1.414-1.415L12 10.586zM6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        d="M13.762 13.774a1 1 0 0 1 1.414-.002l5.53 5.52a1 1 0 1 1-1.412 1.416l-5.53-5.52a1 1 0 0 1-.002-1.415"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconScissors);
const Memo = memo(ForwardRef);
export default Memo;
