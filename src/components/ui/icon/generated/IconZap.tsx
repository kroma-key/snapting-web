import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconZap = (
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
        d="M13.992 2.124a1 1 0 0 0-1.76-.764l-10 12A1 1 0 0 0 3 15h7.867l-.86 6.876a1 1 0 0 0 1.761.764l10-12A1 1 0 0 0 21 9h-7.867zM12 13H5.135l6.45-7.74-.577 4.616A1 1 0 0 0 12 11h6.865l-6.45 7.74.577-4.616A1 1 0 0 0 12 13"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconZap);
const Memo = memo(ForwardRef);
export default Memo;
