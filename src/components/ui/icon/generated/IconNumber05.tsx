import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconNumber05 = (
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
      <g clipPath="url(#icon-number-05_svg__a)">
        <circle cx={12} cy={12} r={12} fill={fill} />
        <path
          fill="#fff"
          d="M12.032 17.14q-1.054 0-1.879-.388a3.27 3.27 0 0 1-1.302-1.07 2.75 2.75 0 0 1-.503-1.56h2.089q.034.591.497.96a1.7 1.7 0 0 0 1.098.367q.508 0 .895-.224a1.6 1.6 0 0 0 .612-.631 1.9 1.9 0 0 0 .223-.935q0-.537-.228-.944a1.6 1.6 0 0 0-.622-.637 1.83 1.83 0 0 0-.91-.233 2.2 2.2 0 0 0-.87.184q-.417.183-.65.502l-1.915-.343.482-5.37h6.225v1.76h-4.45l-.263 2.55h.06q.267-.377.81-.626a2.9 2.9 0 0 1 1.213-.248q.92 0 1.64.432.721.434 1.139 1.188.417.751.413 1.73.005 1.03-.478 1.83-.477.795-1.337 1.253-.855.453-1.989.452"
        />
      </g>
      <defs>
        <clipPath id="icon-number-05_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconNumber05);
const Memo = memo(ForwardRef);
export default Memo;
