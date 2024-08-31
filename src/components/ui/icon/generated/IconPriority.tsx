import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconPriority = (
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
        d="M8.6 6a.6.6 0 0 0-1.2 0zM7.576 17.924a.6.6 0 0 0 .848 0l3.819-3.818a.6.6 0 1 0-.849-.849L8 16.651l-3.394-3.394a.6.6 0 1 0-.849.849zM7.4 6v11.5h1.2V6zM16.6 17.5a.6.6 0 1 1-1.2 0zM15.576 5.576a.6.6 0 0 1 .848 0l3.819 3.818a.6.6 0 1 1-.849.849L16 6.849l-3.394 3.394a.6.6 0 1 1-.849-.849zM15.4 17.5V6h1.2v11.5z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconPriority);
const Memo = memo(ForwardRef);
export default Memo;
