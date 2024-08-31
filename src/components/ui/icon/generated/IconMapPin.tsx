import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconMapPin = (
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
        d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M11.445 23.832 12 23za1 1 0 0 0 1.11 0L12 23l.555.832.003-.002.007-.005.023-.015.082-.057q.109-.074.302-.214a31.433 31.433 0 0 0 4.254-3.727C19.516 17.397 22 13.903 22 10a10 10 0 0 0-20 0c0 3.902 2.484 7.396 4.774 9.813a31.4 31.4 0 0 0 4.254 3.726 19 19 0 0 0 .384.27l.023.016.007.005zM6.343 4.343A8 8 0 0 1 20 10c0 3.098-2.016 6.104-4.226 8.437A29.4 29.4 0 0 1 12 21.773a29.419 29.419 0 0 1-3.774-3.335C6.016 16.103 4 13.097 4 10a8 8 0 0 1 2.343-5.657"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconMapPin);
const Memo = memo(ForwardRef);
export default Memo;
