"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c63ff]/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-[#6c63ff] text-white shadow-[0_0_30px_rgba(108,99,255,0.35)] hover:translate-y-[-1px] hover:bg-[#7b73ff]",
        secondary:
          "border border-[#1f2937] bg-[#1f2937] text-white hover:bg-[#111827] dark:border-[#1f2937] dark:bg-[#1f2937] dark:text-white dark:hover:bg-[#111827]",
        outline:
          "border border-[#6c63ff]/50 bg-transparent text-[#6c63ff] hover:bg-[#6c63ff]/10",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-12 px-8",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}
