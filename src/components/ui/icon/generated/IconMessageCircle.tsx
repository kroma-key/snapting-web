import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMessageCircle = (
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
        d="M12.505 4a7.495 7.495 0 0 0-6.717 10.825 1 1 0 0 1 .053.761l-1.269 3.807 3.845-1.24a1 1 0 0 1 .753.056A7.495 7.495 0 1 0 12.505 4M3.01 11.495a9.495 9.495 0 1 1 5.646 8.682l-5.35 1.726a1 1 0 0 1-1.256-1.268l1.767-5.302a9.5 9.5 0 0 1-.807-3.838"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMessageCircle);
const Memo = memo(ForwardRef);
export default Memo;
