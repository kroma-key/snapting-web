import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconNumber06 = (
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
      <g clipPath="url(#icon-number-06_svg__a)">
        <circle cx={12} cy={12} r={12} fill={fill} />
        <path
          fill="#fff"
          d="M12.112 17.14a4.6 4.6 0 0 1-1.516-.264 3.45 3.45 0 0 1-1.303-.84q-.577-.582-.915-1.542-.333-.96-.333-2.356.005-1.283.293-2.292.293-1.014.836-1.72.546-.706 1.307-1.074a3.8 3.8 0 0 1 1.706-.373q1.019 0 1.8.398.78.393 1.252 1.069.477.675.577 1.516h-2.123a1.42 1.42 0 0 0-.522-.835q-.398-.303-.984-.303-.995 0-1.512.865-.511.864-.522 2.351h.07q.229-.452.616-.77.393-.324.89-.493a3.2 3.2 0 0 1 1.06-.174q.904 0 1.61.428.706.423 1.114 1.163.407.742.407 1.696 0 1.034-.482 1.84a3.34 3.34 0 0 1-1.337 1.262q-.855.452-1.99.447m-.01-1.69a1.68 1.68 0 0 0 1.506-.886 1.9 1.9 0 0 0 .224-.915q0-.507-.224-.91a1.654 1.654 0 0 0-1.492-.88q-.372 0-.69.14a1.74 1.74 0 0 0-.92.964q-.134.324-.134.691 0 .493.224.9.228.408.616.652.393.243.89.243"
        />
      </g>
      <defs>
        <clipPath id="icon-number-06_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconNumber06);
const Memo = memo(ForwardRef);
export default Memo;
