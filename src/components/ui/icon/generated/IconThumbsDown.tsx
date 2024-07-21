import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconThumbsDown = (
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
        d="M19.662 1H5.725a3 3 0 0 0-2.994 2.549l-1.38 9A3 3 0 0 0 4.345 16H9v3a4 4 0 0 0 4 4 1 1 0 0 0 .914-.593L17.65 14h2.012a3.31 3.31 0 0 0 3.329-2.866Q23 11.066 23 11V4q0-.068-.009-.134A3.31 3.31 0 0 0 19.662 1m.026 2A1.31 1.31 0 0 1 21 4.077v6.846A1.31 1.31 0 0 1 19.688 12H18V3h1.688m-7.296 17.905L16 12.788V3H5.709a1 1 0 0 0-1 .85l-1.38 9a1.003 1.003 0 0 0 1 1.15H10a1 1 0 0 1 1 1v4a2 2 0 0 0 1.392 1.905"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconThumbsDown);
const Memo = memo(ForwardRef);
export default Memo;
