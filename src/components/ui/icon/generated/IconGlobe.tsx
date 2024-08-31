import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconGlobe = (
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
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11M9.726 3.29A9.01 9.01 0 0 0 3.055 11H7.05a16.3 16.3 0 0 1 2.676-7.71m4.548 0A16.3 16.3 0 0 1 16.95 11h3.995a9.01 9.01 0 0 0-6.67-7.71m.668 7.71A14.3 14.3 0 0 0 12 3.55 14.3 14.3 0 0 0 9.058 11zm-5.884 2h5.884A14.3 14.3 0 0 1 12 20.45 14.3 14.3 0 0 1 9.058 13M7.05 13H3.055a9.01 9.01 0 0 0 6.67 7.71A16.3 16.3 0 0 1 7.05 13m7.224 7.71A16.3 16.3 0 0 0 16.95 13h3.995a9.01 9.01 0 0 1-6.67 7.71"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconGlobe);
const Memo = memo(ForwardRef);
export default Memo;
