import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCrop = (
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
      <g clipPath="url(#icon-crop_svg__a)">
        <path
          fill={fill}
          fillRule="evenodd"
          d="M7.13 1.009a1 1 0 1 0-2-.018l-.036 4.103-4.103.036a1 1 0 1 0 .018 2l4.068-.035L5 15.99V16a3 3 0 0 0 3 3h9v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V8a3 3 0 0 0-3-3h-.009l-8.896.077zm-.053 6.068L7 16.004A1 1 0 0 0 8 17h9V8a1 1 0 0 0-.996-1z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="icon-crop_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCrop);
const Memo = memo(ForwardRef);
export default Memo;
