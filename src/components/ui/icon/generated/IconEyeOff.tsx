import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconEyeOff = (
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
      <g fill={fill} clipPath="url(#icon-eye-off_svg__a)">
        <path
          fillRule="evenodd"
          d="M1.707.293A1 1 0 0 0 .293 1.707l4.275 4.276a19.5 19.5 0 0 0-4.45 5.544 1 1 0 0 0-.012.92L1 12c-.894.447-.894.449-.894.449l.002.002.003.007.011.022a8 8 0 0 0 .192.354 20.67 20.67 0 0 0 2.831 3.85C5.105 18.774 8.1 21 12 21h.016a11.07 11.07 0 0 0 5.81-1.76l4.467 4.467a1 1 0 0 0 1.414-1.414zm.436 11.71a17.5 17.5 0 0 1 3.844-4.602l2.549 2.55a4 4 0 0 0-.32 3.622 4 4 0 0 0 5.834 1.891l2.321 2.322A9.1 9.1 0 0 1 11.991 19c-3.096-.003-5.597-1.775-7.386-3.684a18.7 18.7 0 0 1-2.462-3.313m7.782.037a2 2 0 0 1 .103-.598l2.53 2.53a2 2 0 0 1-2.633-1.932"
          clipRule="evenodd"
        />
        <path d="M21.845 12.02c-2.823-4.654-6.58-7.783-11.696-6.848a1 1 0 1 1-.36-1.967c6.554-1.199 11.05 3.12 14.029 8.219a1 1 0 0 1 .064 1.047 19.5 19.5 0 0 1-2.277 3.363 1 1 0 0 1-1.53-1.288 17.5 17.5 0 0 0 1.77-2.526" />
      </g>
      <defs>
        <clipPath id="icon-eye-off_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconEyeOff);
const Memo = memo(ForwardRef);
export default Memo;
