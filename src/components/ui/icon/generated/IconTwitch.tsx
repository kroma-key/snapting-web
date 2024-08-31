import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconTwitch = (
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
        d="M12 7a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zM17 7a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M3 1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4v3a1 1 0 0 0 1.707.707L12.414 19H17a1 1 0 0 0 .707-.293l4-4A1 1 0 0 0 22 14V2a1 1 0 0 0-1-1zm1 16V3h16v10.586L16.586 17H12a1 1 0 0 0-.707.293L9 19.586V18a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconTwitch);
const Memo = memo(ForwardRef);
export default Memo;
