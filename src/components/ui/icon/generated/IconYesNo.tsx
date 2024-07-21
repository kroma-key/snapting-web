import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconYesNo = (
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
        d="M12.207 3.293a1 1 0 0 0-1.414 0L6.5 7.586 4.707 5.793a1 1 0 0 0-1.414 1.414L6.5 10.414l5.707-5.707a1 1 0 0 0 0-1.414M15.707 14.293a1 1 0 0 0-1.414 1.414l1.793 1.793-1.793 1.793a1 1 0 0 0 1.414 1.414l1.793-1.793 1.793 1.793a1 1 0 0 0 1.414-1.414L18.914 17.5l1.793-1.793a1 1 0 0 0-1.414-1.414L17.5 16.086zM20.707 4.707a1 1 0 0 0-1.414-1.414l-16 16a1 1 0 1 0 1.414 1.414z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconYesNo);
const Memo = memo(ForwardRef);
export default Memo;
