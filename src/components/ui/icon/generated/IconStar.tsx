import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconStar = (
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
        d="M12.897 1.557a1 1 0 0 0-1.794 0l-2.857 5.79-6.39.934a1 1 0 0 0-.554 1.705l4.624 4.503-1.092 6.362a1 1 0 0 0 1.451 1.054L12 18.9l5.715 3.005a1 1 0 0 0 1.45-1.054l-1.09-6.362 4.623-4.503a1 1 0 0 0-.553-1.705l-6.39-.935zm-3.09 7.146L12 4.259l2.193 4.444a1 1 0 0 0 .752.546l4.907.718-3.55 3.457a1 1 0 0 0-.288.885l.838 4.883-4.386-2.307a1 1 0 0 0-.931 0l-4.387 2.307.838-4.883a1 1 0 0 0-.288-.885l-3.55-3.457 4.907-.718a1 1 0 0 0 .752-.546"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconStar);
const Memo = memo(ForwardRef);
export default Memo;
