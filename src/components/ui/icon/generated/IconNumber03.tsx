import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconNumber03 = (
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
      <g clipPath="url(#icon-number-03_svg__a)">
        <circle cx={12} cy={12} r={12} fill={fill} />
        <path
          fill="#fff"
          d="M11.975 17.14q-1.114 0-1.984-.383-.866-.389-1.367-1.064a2.67 2.67 0 0 1-.512-1.571h2.167q.02.372.244.656a1.5 1.5 0 0 0 .606.432q.378.155.85.155.493 0 .87-.174.379-.174.592-.483.214-.308.214-.71a1.2 1.2 0 0 0-.229-.721 1.46 1.46 0 0 0-.646-.498 2.5 2.5 0 0 0-.994-.179h-.95v-1.58h.95q.486 0 .86-.17.378-.168.586-.467.21-.303.21-.706a1.22 1.22 0 0 0-.692-1.128 1.65 1.65 0 0 0-.756-.165q-.437 0-.8.16-.363.154-.582.442a1.16 1.16 0 0 0-.233.676H8.315q.015-.88.503-1.551a3.26 3.26 0 0 1 1.312-1.049q.83-.383 1.874-.383 1.054 0 1.845.383t1.228 1.034q.442.646.437 1.452.006.855-.532 1.427-.532.57-1.387.726v.08q1.125.143 1.71.78.592.63.587 1.58a2.5 2.5 0 0 1-.502 1.547q-.502.675-1.387 1.064-.885.387-2.028.387"
        />
      </g>
      <defs>
        <clipPath id="icon-number-03_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconNumber03);
const Memo = memo(ForwardRef);
export default Memo;
