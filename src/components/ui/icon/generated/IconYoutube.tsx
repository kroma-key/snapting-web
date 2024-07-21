import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconYoutube = (
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
      <g fill={fill} fillRule="evenodd" clipPath="url(#icon-youtube_svg__a)" clipRule="evenodd">
        <path d="M10.244 7.61a1 1 0 0 0-1.494.87v6.54a1 1 0 0 0 1.494.87l5.75-3.27a1 1 0 0 0 0-1.74zm3.233 4.14L10.75 13.3v-3.1z" />
        <path d="M12 3h-.08a97 97 0 0 0-1.033.007c-.676.007-1.596.022-2.572.05-.974.03-2.011.074-2.918.14-.88.064-1.722.154-2.255.297l-.014.004A3.78 3.78 0 0 0 .476 6.283 30 30 0 0 0 0 11.749a30 30 0 0 0 .476 5.509 1 1 0 0 0 .022.096 3.78 3.78 0 0 0 2.638 2.61l.006.002c.533.143 1.375.233 2.255.297.907.066 1.944.11 2.918.14a139 139 0 0 0 3.605.057h.16a118 118 0 0 0 1.033-.007 139 139 0 0 0 2.572-.05 71 71 0 0 0 2.919-.14c.879-.064 1.72-.154 2.254-.297l.014-.004a3.78 3.78 0 0 0 2.652-2.785c.323-1.79.482-3.606.476-5.426a30 30 0 0 0-.476-5.509l-.984.178.97-.243a3.78 3.78 0 0 0-2.673-2.728c-.525-.129-1.36-.211-2.24-.27-.905-.06-1.941-.1-2.915-.126A151 151 0 0 0 12.08 3zm0 1v1h.295a147 147 0 0 1 3.333.052c.961.026 1.968.065 2.836.123.879.058 1.541.132 1.881.212a1.78 1.78 0 0 1 1.218 1.247c.301 1.686.448 3.397.437 5.11v.01a28 28 0 0 1-.437 5.032 1.78 1.78 0 0 1-1.228 1.25c-.329.086-.989.168-1.877.233-.866.063-1.872.105-2.833.134a137 137 0 0 1-3.55.057h-.37a140 140 0 0 1-3.33-.057 69 69 0 0 1-2.833-.134c-.892-.066-1.553-.147-1.88-.234a1.78 1.78 0 0 1-1.227-1.186A28 28 0 0 1 2 11.756v-.01a28 28 0 0 1 .438-5.072 1.78 1.78 0 0 1 1.227-1.25c.33-.086.99-.168 1.877-.233a69 69 0 0 1 2.833-.134A136 136 0 0 1 11.925 5h.074z" />
      </g>
      <defs>
        <clipPath id="icon-youtube_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconYoutube);
const Memo = memo(ForwardRef);
export default Memo;
