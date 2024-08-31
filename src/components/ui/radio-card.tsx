"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";

import { cn } from "@/library/utils";

const RadioCard = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("flex", className)} {...props} ref={ref} />;
});
RadioCard.displayName = RadioGroupPrimitive.Root.displayName;

const RadioCardItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "flex flex-shrink-0 items-center justify-center text-primary/30",
        "data-[state='checked']:bg-primary/80 data-[state='checked']:text-primary-foreground data-[state='checked']:shadow-sm",
        "hover:bg-primary/80 hover:text-primary-foreground hover:shadow-sm",
        "cursor-pointer",
        className,
      )}
      {...props}
    />
  );
});
RadioCardItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioCard, RadioCardItem };
