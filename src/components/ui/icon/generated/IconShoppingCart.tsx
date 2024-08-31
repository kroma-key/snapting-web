import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconShoppingCart = (
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
      <g fill={fill} clipPath="url(#icon-shopping-cart_svg__a)">
        <path
          fillRule="evenodd"
          d="M1 0a1 1 0 1 0 0 2h3.18l.832 4.155q.006.043.017.084l1.67 8.346A3 3 0 0 0 9.69 17h9.702a3 3 0 0 0 2.99-2.415l.001-.008 1.6-8.39A1 1 0 0 0 23 5H6.82L5.98.804A1 1 0 0 0 5 0zm6.22 7h14.571l-1.372 7.198a1 1 0 0 1-1 .802H9.66a1 1 0 0 1-1-.805z"
          clipRule="evenodd"
        />
        <path d="M7 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0M18 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
      </g>
      <defs>
        <clipPath id="icon-shopping-cart_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconShoppingCart);
const Memo = memo(ForwardRef);
export default Memo;
