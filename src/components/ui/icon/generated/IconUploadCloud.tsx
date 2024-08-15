import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconUploadCloud = (
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
      <g fill={fill} clipPath="url(#icon-upload-cloud_svg__a)">
        <path d="M8.663 2.009A9 9 0 0 1 17.48 8H18a6.002 6.002 0 0 1 5.497 8.398 6 6 0 0 1-2.628 2.87 1 1 0 0 1-.958-1.756A4 4 0 0 0 18 10H16.74a1 1 0 0 1-.968-.75 7 7 0 1 0-12.023 6.388 1 1 0 1 1-1.498 1.324A9 9 0 0 1 8.663 2.01" />
        <path d="M11.617 11.076a1 1 0 0 0-.318.21l-.006.007-4 4a1 1 0 1 0 1.414 1.414L11 14.414V21a1 1 0 1 0 2 0v-6.586l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-.704-.293h-.006a1 1 0 0 0-.38.076" />
      </g>
      <defs>
        <clipPath id="icon-upload-cloud_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconUploadCloud);
const Memo = memo(ForwardRef);
export default Memo;
