import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconNumber08 = (
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
      <g clipPath="url(#icon-number-08_svg__a)">
        <circle cx={12} cy={12} r={12} fill={fill} />
        <path
          fill="#fff"
          d="M11.996 17.14q-1.149 0-2.044-.373-.89-.378-1.397-1.03a2.34 2.34 0 0 1-.507-1.476q0-.636.288-1.168.294-.537.796-.89.503-.358 1.124-.458v-.07a2.2 2.2 0 0 1-1.323-.79 2.27 2.27 0 0 1-.507-1.466q0-.79.462-1.407.463-.623 1.268-.975.81-.357 1.84-.358 1.029 0 1.834.358.81.358 1.273.98.462.616.467 1.402a2.27 2.27 0 0 1-.517 1.466 2.22 2.22 0 0 1-1.312.79v.07a2.6 2.6 0 0 1 1.108.458q.502.353.796.89a2.39 2.39 0 0 1-.21 2.644q-.506.652-1.401 1.03-.89.372-2.039.372m0-1.582q.512.001.894-.184a1.47 1.47 0 0 0 .597-.517q.219-.333.219-.765 0-.442-.224-.78a1.54 1.54 0 0 0-.606-.538 1.9 1.9 0 0 0-.88-.198 1.9 1.9 0 0 0-.88.198q-.388.195-.612.537a1.4 1.4 0 0 0-.219.78q0 .434.214.767.214.327.602.516.387.184.894.184m0-4.549q.427 0 .76-.174a1.3 1.3 0 0 0 .522-.482q.19-.308.19-.71a1.27 1.27 0 0 0-.707-1.17 1.6 1.6 0 0 0-.765-.173 1.6 1.6 0 0 0-.766.174q-.333.17-.522.472a1.3 1.3 0 0 0-.184.696q0 .404.189.711.189.308.522.482.334.174.76.174"
        />
      </g>
      <defs>
        <clipPath id="icon-number-08_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconNumber08);
const Memo = memo(ForwardRef);
export default Memo;
