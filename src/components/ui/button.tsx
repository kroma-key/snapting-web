import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/library/utils";

import { radiusVariants } from "./token/radius";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-[#18181B] border-2",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        "big-icon": "size-20",
        icon: "size-6",
      },
      radius: radiusVariants,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  readonly asChild?: boolean;
}

// @TODO: Button의 prefix와 suffix에 icon의 key를 extract해서 넣어야함
const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps &
    Readonly<{
      fullWidth?: boolean;
    }>
>(
  (
    {
      // cva
      variant,
      size,
      radius,
      // tag props
      className,
      type = "button",
      asChild = false,
      fullWidth,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, radius }), fullWidth && "w-full", className)}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
