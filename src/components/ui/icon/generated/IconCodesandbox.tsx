import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconCodesandbox = (
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
        d="M12 1.002a3 3 0 0 0-1.498.4L7.306 3.23a1 1 0 0 0-.553.316l-3.25 1.857-.003.002a3 3 0 0 0-.937.848 1 1 0 0 0-.249.414A3 3 0 0 0 2 7.999V16a3 3 0 0 0 1.5 2.595l.004.002 3.249 1.857c.142.16.335.274.554.316l3.193 1.825.002.001c.317.183.664.305 1.023.363a1 1 0 0 0 .95 0c.36-.058.706-.18 1.023-.363l.002-.001 3.193-1.825a1 1 0 0 0 .554-.316l3.25-1.857.003-.002A3 3 0 0 0 22 16V7.999a3 3 0 0 0-.314-1.333 1 1 0 0 0-.25-.414 3 3 0 0 0-.936-.848l-3.253-1.859a1 1 0 0 0-.553-.316L13.5 1.404l-.002-.001A3 3 0 0 0 12 1.002m1 19.576 2.5-1.428V14.6a1 1 0 0 1 .5-.866l4-2.311V8.537l-7 4.05zm-2-7.991-7-4.05v2.886l4 2.311a1 1 0 0 1 .5.866v4.55l2.5 1.428zm1-1.732 6.96-4.027-2.51-1.435-3.95 2.283a1 1 0 0 1-1 0L7.55 5.393 5.038 6.828zm5.5 7.152 2-1.143.002-.001a1 1 0 0 0 .498-.864v-2.266l-2.5 1.444zM4 15.999v-2.266l2.5 1.444v2.83l-2-1.143-.002-.001A1 1 0 0 1 4 15.999M14.44 4.245l-1.94-1.11a1 1 0 0 0-1 0l-.004.003L9.56 4.245 12 5.655z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconCodesandbox);
const Memo = memo(ForwardRef);
export default Memo;
