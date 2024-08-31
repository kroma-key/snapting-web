import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "@/library/utils";

const textVariant = cva(["m-0"], {
  variants: {
    font: {
      pretendard: "font-pretendard",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extraBold: "font-extrabold",
    },
    size: {
      "heading/medium": "text-[38px] leading-[40px]",
      "heading/small": "text-[24px] leading-[32px]",
      "heading/tiny": "text-[20px] leading-[28px]",
      "label/large": "text-[18px] leading-[28px]",
      "label/base/01": "text-[18px] leading-[26px]",
      "label/base/02": "text-[16px] leading-[24px]",
      "label/base/03": "text-[14px] leading-[20px]",
      // @TODO: it is same with label/base/03
      "paragraph/small": "text-[14px] leading-[20px]",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    wrap: {
      wrap: "whitespace-normal",
      nowrap: "whitespace-nowrap",
      pretty: "whitespace-normal text-pretty",
      balance: "whitespace-normal text-balance",
    },
    color: {
      inherit: "text-inherit",
      primary: "text-primary",
      "primary-foreground": "text-primary-foreground",
      destructive: "text-destructive",
      "destructive-foreground": "text-destructive-foreground",
      muted: "text-muted",
      "muted-foreground": "text-muted-foreground",
      white: "text-white",
      black: "text-black",
      "gray/400": "text-gray-400",
      "gray/500": "text-gray-500",
      // unnamed color
      "content-primary": "text-[#09090B]",
      "content-secondary": "text-[#62626A]",
      "content-teritary": "text-[#A1A1AA]",
    },
  },
  defaultVariants: {
    font: "pretendard",
    weight: "medium",
    size: "label/base/03",
    color: "inherit",
  },
});

type TextElement = React.ElementRef<"span">;
type TextOwnProps = {
  asChild?: boolean;
} & VariantProps<typeof textVariant>;

type TextAsChildProps = {
  asChild: true;
  as?: never;
} & ComponentPropsWithoutRef<"span">;
type TextSpanProps = {
  as?: "span";
  asChild?: false;
} & ComponentPropsWithoutRef<"span">;
type TextDivProps = {
  as: "div";
  asChild?: false;
} & ComponentPropsWithoutRef<"div">;
type TextLabelProps = {
  as: "label";
  asChild?: false;
} & ComponentPropsWithoutRef<"label">;
type TextPProps = { as: "p"; asChild?: false } & ComponentPropsWithoutRef<"p">;
type TextProps = TextOwnProps &
  (TextAsChildProps | TextSpanProps | TextDivProps | TextLabelProps | TextPProps);

const Text = forwardRef<TextElement, TextProps>((props, forwardedRef) => {
  const {
    children,
    className,
    asChild,
    as: Tag = "span",
    // cva
    // @TODO: make util to extract cva props from props
    font,
    weight,
    size,
    align,
    wrap,
    color,
    //
    ...textProps
  } = props;

  return (
    <Slot
      {...textProps}
      ref={forwardedRef}
      className={cn(
        textVariant({
          font,
          weight,
          size,
          align,
          wrap,
          color,
        }),
        className,
      )}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  );
});
Text.displayName = "Text";

export { Text };
export type { TextProps };
