import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconDownloadCloud = (
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
      <g fill={fill} clipPath="url(#icon-download-cloud_svg__a)">
        <path d="M12.627 2.756A9 9 0 0 0 2.251 16.953a1 1 0 1 0 1.498-1.326A7 7 0 1 1 15.77 9.248a1 1 0 0 0 .969.752H18a4 4 0 0 1 3.817 2.792 4 4 0 0 1-1.512 4.48 1 1 0 1 0 1.15 1.636A6 6 0 0 0 18 8h-.52a9 9 0 0 0-4.853-5.244" />
        <path d="M12 11a1 1 0 0 1 1 1v6.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 18.586V12a1 1 0 0 1 1-1" />
      </g>
      <defs>
        <clipPath id="icon-download-cloud_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconDownloadCloud);
const Memo = memo(ForwardRef);
export default Memo;
