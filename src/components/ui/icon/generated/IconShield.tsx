import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconShield = (
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
        d="M12.351 1.064a1 1 0 0 0-.702 0l-8 3A1 1 0 0 0 3 5v7c0 3.446 2.282 6.2 4.342 8.003a22.7 22.7 0 0 0 4.103 2.836l.076.04.022.01.006.004h.002s.002.001.449-.893l-.447.894a1 1 0 0 0 .894 0L12 22l.447.894h.002l.002-.001.006-.004.022-.01a8 8 0 0 0 .35-.188 22.684 22.684 0 0 0 3.83-2.689C18.719 18.2 21 15.447 21 12V5a1 1 0 0 0-.649-.936zm.369 19.37c-.283.176-.528.32-.72.429a20.692 20.692 0 0 1-3.341-2.365C6.719 16.8 5 14.553 5 12V5.693l7-2.625 7 2.625V12c0 2.554-1.718 4.8-3.658 6.497a21 21 0 0 1-2.622 1.936"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconShield);
const Memo = memo(ForwardRef);
export default Memo;
