import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconFlag = (
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
        d="M2.984 2.91a1 1 0 0 1 .656-.94c1.643-.603 2.993-.879 4.375-.853 1.366.027 2.696.348 4.28.836 1.556.48 2.665.761 3.742.796 1.049.033 2.131-.167 3.601-.766a1 1 0 0 1 1.377.926v11a1 1 0 0 1-.622.926c-1.66.677-3.025.957-4.42.913-1.369-.044-2.702-.4-4.268-.883-1.538-.474-2.65-.727-3.728-.748-.9-.017-1.826.127-2.993.504V22a1 1 0 1 1-2 0zm5.03 9.208c-.986-.02-1.957.116-3.03.415V3.62c1.167-.377 2.092-.521 2.993-.504 1.078.02 2.19.274 3.728.748 1.566.482 2.9.839 4.267.883.992.031 1.967-.1 3.043-.422v8.895c-1.164.415-2.083.556-2.979.528-1.076-.035-2.185-.316-3.742-.796-1.583-.488-2.913-.81-4.28-.835"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconFlag);
const Memo = memo(ForwardRef);
export default Memo;
