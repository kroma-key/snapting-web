import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconNumber02 = (
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
      <g clipPath="url(#icon-number-02_svg__a)">
        <circle cx={12} cy={12} r={12} fill={fill} />
        <path
          fill="#fff"
          d="M8.416 17v-1.55l3.624-3.357q.463-.447.776-.805.318-.358.482-.701.164-.348.164-.75 0-.45-.204-.771a1.34 1.34 0 0 0-.556-.503 1.75 1.75 0 0 0-.8-.179q-.468 0-.816.19a1.3 1.3 0 0 0-.537.541 1.76 1.76 0 0 0-.189.84H8.317q0-.999.452-1.735.453-.735 1.268-1.138t1.88-.403q1.092 0 1.903.388.816.383 1.268 1.064.452.68.452 1.561 0 .576-.228 1.139-.224.561-.8 1.247-.577.682-1.626 1.636l-1.487 1.457v.07h4.276V17z"
        />
      </g>
      <defs>
        <clipPath id="icon-number-02_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconNumber02);
const Memo = memo(ForwardRef);
export default Memo;
