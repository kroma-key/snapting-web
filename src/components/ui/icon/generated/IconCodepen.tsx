import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCodepen = (
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
        d="M12.557 1.17a.995.995 0 0 0-1.114 0L1.474 7.65A1 1 0 0 0 1 8.511v6.976a1 1 0 0 0 .474.863l9.97 6.48a.995.995 0 0 0 1.113 0l9.97-6.48a1 1 0 0 0 .292-.277l.014-.02a1 1 0 0 0 .167-.566V8.512a1 1 0 0 0-.167-.566l-.014-.02-.024-.032a1 1 0 0 0-.269-.245zM11 3.842 3.788 8.53 7 10.779l4-2.8zm2 4.136V3.843l7.212 4.688L17 10.779zM18.744 12 21 10.42v3.16zM12 9.72 8.744 12 12 14.28 15.256 12zm-9 .7L5.256 12 3 13.58zm4 2.8-3.212 2.25L11 20.156v-4.136zm13.212 2.25L17 13.22l-4 2.8v4.137z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCodepen);
const Memo = memo(ForwardRef);
export default Memo;
