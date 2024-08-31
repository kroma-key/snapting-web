import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconBell = (
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
        d="M12 1a7 7 0 0 0-7 7c0 3.353-.717 5.435-1.378 6.646a6 6 0 0 1-.88 1.244 3 3 0 0 1-.305.284l-.003.002A1 1 0 0 0 3 18h18a1 1 0 0 0 .566-1.824l-.002-.002-.053-.042a3 3 0 0 1-.254-.242 6 6 0 0 1-.879-1.244C19.718 13.435 19 11.353 19 8a7 7 0 0 0-7-7m6.622 14.604q.114.21.229.396H5.149q.114-.187.229-.396C6.218 14.065 7 11.647 7 8a5 5 0 1 1 10 0c0 3.647.783 6.065 1.622 7.604"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        d="M11.135 20.498a1 1 0 0 0-1.73 1.004 3 3 0 0 0 5.19 0 1 1 0 0 0-1.73-1.004 1 1 0 0 1-1.73 0"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconBell);
const Memo = memo(ForwardRef);
export default Memo;
