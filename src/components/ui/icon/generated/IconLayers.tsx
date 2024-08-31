import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconLayers = (
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
        d="M11.553 1.106a1 1 0 0 1 .894 0l10 5a1 1 0 0 1 0 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1 0-1.788zM4.236 7 12 10.882 19.764 7 12 3.118z"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        d="M1.106 16.553a1 1 0 0 1 1.341-.447L12 20.882l9.553-4.776a1 1 0 1 1 .894 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1-.447-1.341"
      />
      <path
        fill={fill}
        d="M2.447 11.106a1 1 0 1 0-.894 1.788l10 5a1 1 0 0 0 .894 0l10-5a1 1 0 1 0-.894-1.788L12 15.882z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconLayers);
const Memo = memo(ForwardRef);
export default Memo;
