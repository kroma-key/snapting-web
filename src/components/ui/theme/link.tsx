import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "@/library/utils";

const linkVariant = cva(["box-border"], {
  variants: {
    underline: {
      none: "no-underline",
      always: "underline",
      hover: "hover:underline",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      bold: "font-bold",
      semibold: "font-semibold",
      extrabold: "font-extrabold",
    },
    color: {
      inherit: "text-inherit",
    },
  },
  defaultVariants: {
    underline: "none",
    weight: "normal",
    color: "inherit",
  },
});

type LinkElement = React.ElementRef<"a">;
type LinkOwnProps = {
  asChild?: boolean;
} & VariantProps<typeof linkVariant>;
type LinkAsChildProps = { asChild?: true; as?: never } & ComponentPropsWithoutRef<"a">;
type LinkAProps = { as?: "a"; asChild?: false } & ComponentPropsWithoutRef<"a">;

type LinkProps = LinkOwnProps & (LinkAsChildProps | LinkAProps);

const Link = forwardRef<LinkElement, LinkProps>((props, forwardedRef) => {
  const {
    // cva
    // @TODO: make util to extract cva props from props
    underline,
    weight,
    color,
    // linkProps
    className,
    asChild,
    as: Tag = "a",
    ...linkProps
  } = props;

  const Comp = asChild ? Slot : Tag;

  return (
    <Comp
      {...linkProps}
      ref={forwardedRef}
      className={cn(
        linkVariant({
          underline,
          weight,
          color,
        }),
        className,
      )}
    />
  );
});

Link.displayName = "Link";

export { Link };
export type { LinkProps };
