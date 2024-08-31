import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconTwitter = (
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
      <g clipPath="url(#icon-twitter_svg__a)">
        <path
          fill={fill}
          fillRule="evenodd"
          d="M17.81 2.154A5.48 5.48 0 0 0 11 7.506a9.66 9.66 0 0 1-7.182-4.08L3 4l-.894-.447-.023.048-.003.006-.011.027q-.015.034-.038.092a13.083 13.083 0 0 0-.483 1.492c-.251.97-.49 2.324-.422 3.827.069 1.508.448 3.186 1.451 4.771.753 1.188 1.835 2.29 3.338 3.217A10.64 10.64 0 0 1 1.04 18a1 1 0 0 0-.526 1.873c4.777 2.654 10.137 2.678 14.331.446C19.063 18.075 22 13.6 22 7.5v-.003q0-.245-.023-.486a8.7 8.7 0 0 0 1.995-3.775L23 3l-.576-.817a10 10 0 0 1-2.291 1.202 5.5 5.5 0 0 0-2.323-1.231m-14.686 6.8c-.05-1.093.097-2.11.28-2.91a11.66 11.66 0 0 0 8.622 3.485 1 1 0 0 0 .974-1V7.517a3.48 3.48 0 0 1 6.105-2.33 1 1 0 0 0 1.043.301q.348-.104.688-.23-.283.371-.618.7a1 1 0 0 0-.28.9q.06.32.062.644c0 5.4-2.563 9.174-6.095 11.054-2.598 1.382-5.775 1.768-8.945.96a12.6 12.6 0 0 0 3.602-1.688 1 1 0 0 0-.156-1.741c-2.09-.929-3.366-2.118-4.14-3.34-.777-1.228-1.085-2.55-1.142-3.792"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="icon-twitter_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconTwitter);
const Memo = memo(ForwardRef);
export default Memo;
