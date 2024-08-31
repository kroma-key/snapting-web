import { Ref, forwardRef, memo } from "react";

import { colorMap } from "@/components/ui/token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconEye = (
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
        d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M23.894 11.552 23 12c.895.447.894.447.894.448l-.002.003-.003.007-.011.022-.04.078q-.053.099-.152.276a20.67 20.67 0 0 1-2.831 3.85C18.895 18.774 15.9 21 12 21s-6.895-2.226-8.854-4.316a20.7 20.7 0 0 1-2.832-3.85 12 12 0 0 1-.192-.354l-.01-.022-.004-.007-.002-.002s0-.002.894-.449l-.894-.448.002-.003.003-.007.011-.022a8 8 0 0 1 .192-.354 20.673 20.673 0 0 1 2.831-3.85C5.106 5.226 8.102 3 12 3s6.896 2.226 8.855 4.316a20.7 20.7 0 0 1 2.831 3.85 13 13 0 0 1 .192.354l.011.022.003.007zm-21.32 1.156c-.179-.278-.324-.52-.433-.708a18.677 18.677 0 0 1 2.464-3.316C6.395 6.774 8.9 5 12 5s5.605 1.774 7.395 3.684A18.7 18.7 0 0 1 21.86 12a18.685 18.685 0 0 1-2.464 3.316C17.606 17.226 15.101 19 12 19s-5.604-1.774-7.395-3.684a18.7 18.7 0 0 1-2.03-2.609"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        d="m23 12 .894-.448c.14.282.14.614 0 .896zM.106 11.552 1 12l-.894.447a1 1 0 0 1 0-.895"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconEye);
const Memo = memo(ForwardRef);
export default Memo;
