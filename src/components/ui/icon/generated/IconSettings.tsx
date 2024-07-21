import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconSettings = (
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
      <g fill={fill} fillRule="evenodd" clipPath="url(#icon-settings_svg__a)" clipRule="evenodd">
        <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
        <path d="M20.315 15.404 19.4 15l.92.394a.65.65 0 0 1 .593-.394H21a3 3 0 0 0 0-6h-.168a.65.65 0 0 1-.533-.285 1 1 0 0 0-.064-.199.65.65 0 0 1 .127-.714l.055-.054a3.002 3.002 0 1 0-4.245-4.245l-.054.055a.65.65 0 0 1-.714.127l-.01-.004A.65.65 0 0 1 15 3.087V3a3 3 0 0 0-6 0v.167a.65.65 0 0 1-.285.534 1 1 0 0 0-.199.064.65.65 0 0 1-.714-.127l-.054-.055a3 3 0 1 0-4.245 4.244l.055.055a.65.65 0 0 1 .127.714l-.024.059a.65.65 0 0 1-.585.425H3a3 3 0 1 0 0 6h.167a.65.65 0 0 1 .594.394l.004.01a.65.65 0 0 1-.127.714l-.055.055a3 3 0 0 0 3.27 4.895 3 3 0 0 0 .974-.65l.055-.056a.65.65 0 0 1 .714-.127l.059.023a.65.65 0 0 1 .425.586V21a3 3 0 1 0 6 0v-.168a.65.65 0 0 1 .394-.593l.01-.004a.65.65 0 0 1 .714.127l.055.055a3.002 3.002 0 1 0 4.244-4.244l-.055-.055a.65.65 0 0 1-.127-.714M11.293 2.293A1 1 0 0 1 13 3v.094a2.65 2.65 0 0 0 1.601 2.423 2.65 2.65 0 0 0 2.918-.532l.008-.008.06-.06a1 1 0 0 1 1.09-.217.999.999 0 0 1 .325 1.633l-.06.06-.007.008a2.65 2.65 0 0 0-.607 2.729q.018.136.073.264A2.65 2.65 0 0 0 20.826 11H21a1 1 0 0 1 0 2h-.094a2.65 2.65 0 0 0-2.423 1.601 2.65 2.65 0 0 0 .532 2.918l.008.008.06.06a1 1 0 0 1 0 1.416 1 1 0 0 1-1.415 0l-.06-.06-.009-.008a2.65 2.65 0 0 0-2.918-.532 2.65 2.65 0 0 0-1.601 2.423V21a1 1 0 0 1-2 0v-.113a2.65 2.65 0 0 0-1.705-2.415 2.65 2.65 0 0 0-2.894.543l-.008.008-.06.06a1 1 0 0 1-1.416 0 1 1 0 0 1 0-1.415l.06-.06.008-.009a2.65 2.65 0 0 0 .532-2.918 2.65 2.65 0 0 0-2.423-1.601H3a1 1 0 0 1 0-2h.113a2.65 2.65 0 0 0 2.414-1.705 2.65 2.65 0 0 0-.542-2.894l-.008-.008-.06-.06a1.003 1.003 0 0 1 0-1.416 1 1 0 0 1 1.415 0l.06.06.009.008a2.65 2.65 0 0 0 2.729.607 1 1 0 0 0 .264-.073A2.65 2.65 0 0 0 11 3.174V3a1 1 0 0 1 .293-.707" />
      </g>
      <defs>
        <clipPath id="icon-settings_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconSettings);
const Memo = memo(ForwardRef);
export default Memo;
