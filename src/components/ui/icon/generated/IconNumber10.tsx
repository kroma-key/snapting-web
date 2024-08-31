import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconNumber10 = (
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
      <g clipPath="url(#icon-number-10_svg__a)">
        <circle cx={12} cy={12} r={12} fill={fill} />
        <path
          fill="#fff"
          d="M9.08 6.818V17H6.929V8.862h-.06l-2.331 1.461V8.414l2.52-1.596zM15.353 17.224q-1.282-.005-2.207-.631-.92-.627-1.417-1.815-.492-1.188-.487-2.859 0-1.665.492-2.839.496-1.173 1.417-1.784.924-.617 2.202-.617 1.277 0 2.198.617.924.615 1.421 1.79.498 1.168.492 2.833 0 1.676-.497 2.864-.491 1.188-1.412 1.815-.92.626-2.202.626m0-1.785q.875 0 1.397-.88.522-.879.517-2.64 0-1.158-.239-1.929-.233-.77-.666-1.158a1.45 1.45 0 0 0-1.009-.388q-.87 0-1.392.87t-.527 2.605q0 1.173.234 1.96.239.78.67 1.172a1.47 1.47 0 0 0 1.015.388"
        />
      </g>
      <defs>
        <clipPath id="icon-number-10_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconNumber10);
const Memo = memo(ForwardRef);
export default Memo;
