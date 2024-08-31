import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconWind = (
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
        d="M10.716 5.044A1 1 0 1 1 11.004 7H2a1 1 0 0 0 0 2h9V8l-.004 1h.002a3 3 0 1 0-.866-5.869 1 1 0 0 0 .584 1.913"
      />
      <path
        fill={fill}
        d="M19.061 8.064A1.5 1.5 0 1 1 19.5 11H2a1 1 0 1 0 0 2h17.502a3.5 3.5 0 1 0-2.478-5.978 1 1 0 0 0 1.412 1.416 1.5 1.5 0 0 1 .625-.374M15.414 15.35a3 3 0 0 0-1.416-.35H2a1 1 0 1 0 0 2h12.004a1 1 0 1 1-.288 1.956 1 1 0 0 0-.584 1.913 3 3 0 0 0 2.282-5.52"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconWind);
const Memo = memo(ForwardRef);
export default Memo;
