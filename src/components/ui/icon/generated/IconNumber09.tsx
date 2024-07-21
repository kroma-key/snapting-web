import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconNumber09 = (
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
      <g clipPath="url(#icon-number-09_svg__a)">
        <circle cx={12} cy={12} r={12} fill={fill} />
        <path
          fill="#fff"
          d="M11.888 6.679q.785 0 1.511.263.732.264 1.303.84.577.577.91 1.532.338.95.343 2.331 0 1.298-.293 2.317-.29 1.014-.83 1.725a3.6 3.6 0 0 1-1.308 1.084q-.765.368-1.71.368-1.02 0-1.8-.393a3.4 3.4 0 0 1-1.258-1.079 3.36 3.36 0 0 1-.572-1.54h2.123q.124.556.522.864.398.303.984.303.995 0 1.512-.864.517-.87.522-2.382h-.07a2.4 2.4 0 0 1-.616.77 2.9 2.9 0 0 1-.89.493 3.2 3.2 0 0 1-1.06.174q-.899 0-1.605-.423A3.03 3.03 0 0 1 8.492 11.9q-.407-.74-.407-1.69-.005-1.024.472-1.825A3.33 3.33 0 0 1 9.89 7.131q.86-.458 1.999-.452m.015 1.69q-.502 0-.895.239a1.76 1.76 0 0 0-.616.641q-.225.403-.22.9 0 .502.22.905.223.398.606.636.389.234.885.234a1.7 1.7 0 0 0 1.243-.522q.239-.248.373-.572a1.833 1.833 0 0 0-.094-1.571 1.75 1.75 0 0 0-.617-.646 1.64 1.64 0 0 0-.885-.244"
        />
      </g>
      <defs>
        <clipPath id="icon-number-09_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconNumber09);
const Memo = memo(ForwardRef);
export default Memo;
