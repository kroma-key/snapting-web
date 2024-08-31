import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "@/library/utils";

const flexVariant = cva(["box-border"], {
  variants: {
    display: {
      flex: "flex",
      "inline-flex": "inline-flex",
      none: "hidden",
    },
    direction: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
    wrap: {
      wrap: "flex-wrap",
      "no-wrap": "flex-nowrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
    gap: {
      // rem: tailwind spacing scale
      // rem base: 16px
      "4": "gap-1",
      "6": "gap-1.5",
      "8": "gap-2",
      "12": "gap-3",
      "16": "gap-4",
      "20": "gap-5",
      "24": "gap-6",
      "32": "gap-8",
      "36": "gap-9",
      "56": "gap-14",
      "64": "gap-16",
    },
    // @TODO: make it common with Box, Flex, Grid, Container, Section
    position: {
      static: "static",
      fixed: "fixed",
      absolute: "absolute",
      relative: "relative",
      sticky: "sticky",
    },
    shrink: {
      0: "flex-grow-0",
      1: "flex-grow-1",
    },
    grow: {
      0: "flex-shrink-0",
      1: "flex-shrink-1",
    },
  },
  defaultVariants: {
    display: "flex",
    justify: "start",
  },
});

type FlexElement = React.ElementRef<"div">;
type FlexOwnProps = {
  asChild?: boolean;
} & VariantProps<typeof flexVariant>;

type FlexAsChildProps = { asChild?: true; as?: never } & ComponentPropsWithoutRef<"div">;
type FlexDivProps = { as?: "div"; asChild?: false } & ComponentPropsWithoutRef<"div">;
type FlexSpanProps = { as: "span"; asChild?: false } & ComponentPropsWithoutRef<"span">;
type FlexProps = FlexOwnProps & (FlexAsChildProps | FlexSpanProps | FlexDivProps);

const Flex = forwardRef<FlexElement, FlexProps>((props, forwardedRef) => {
  const {
    // cva
    // @TODO: make util to extract cva props from props
    display,
    direction,
    align,
    justify,
    wrap,
    gap,
    shrink,
    grow,
    position,
    // flexProps
    className,
    asChild,
    as: Tag = "div",
    ...flexProps
  } = props;

  const Comp = asChild ? Slot : Tag;

  return (
    <Comp
      {...flexProps}
      ref={forwardedRef}
      className={cn(
        flexVariant({
          display,
          direction,
          align,
          justify,
          wrap,
          gap,
          position,
          shrink,
          grow,
        }),
        className,
      )}
    />
  );
});
Flex.displayName = "Flex";

export { Flex };
export type { FlexProps };
