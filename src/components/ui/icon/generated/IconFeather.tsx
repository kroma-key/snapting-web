import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconFeather = (
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
        d="M11.043 3.043a7.003 7.003 0 0 1 9.905 9.903v.001l-2.654 2.661q-.08.105-.183.184l-3.903 3.914A1 1 0 0 1 13.5 20H5.414l-2.707 2.707a1 1 0 0 1-1.414-1.414L4 18.586V10.5a1 1 0 0 1 .293-.707zM17.073 14l2.459-2.466v-.001a5.003 5.003 0 0 0-7.075-7.076L6 10.914v5.672l9.293-9.293a1 1 0 1 1 1.414 1.414L11.414 14zm-7.659 2h5.665l-1.994 2h-5.67z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconFeather);
const Memo = memo(ForwardRef);
export default Memo;
