import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconPackage = (
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
        d="M12 1.002a3 3 0 0 0-1.498.4L7.306 3.23a1 1 0 0 0-.553.316l-3.25 1.857-.003.002a3 3 0 0 0-.937.848 1 1 0 0 0-.249.414A3 3 0 0 0 2 7.999V16a3 3 0 0 0 1.5 2.595l.004.002 6.996 3.998.002.001a3 3 0 0 0 1.023.363 1 1 0 0 0 .95 0c.36-.058.706-.18 1.023-.363l.002-.001 6.996-3.998.004-.002A3 3 0 0 0 22 16V7.999a3 3 0 0 0-.314-1.333 1 1 0 0 0-.25-.414 3 3 0 0 0-.936-.848l-7-4-.002-.001A3 3 0 0 0 12 1.002m1 19.576 6.5-3.714.002-.001a1 1 0 0 0 .498-.864V8.537l-7 4.05zm-2-7.991-7-4.05V16a1 1 0 0 0 .498.864H4.5l6.5 3.715zm1.504-9.449 6.457 3.69-2.456 1.42-6.944-4.004 1.935-1.106.004-.002a1 1 0 0 1 1 0zM12 10.855l2.507-1.45L7.55 5.393 5.039 6.828z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconPackage);
const Memo = memo(ForwardRef);
export default Memo;
