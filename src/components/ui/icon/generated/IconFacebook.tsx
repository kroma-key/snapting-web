import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconFacebook = (
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
        d="M15 1a6 6 0 0 0-6 6v2H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 .97-.758l1-4A1 1 0 0 0 18 9h-3V7h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-2.828 3.172A4 4 0 0 1 15 3h2v2h-2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h2.72l-.5 2H14a1 1 0 0 0-1 1v7h-2v-7a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7a4 4 0 0 1 1.172-2.828"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconFacebook);
const Memo = memo(ForwardRef);
export default Memo;
