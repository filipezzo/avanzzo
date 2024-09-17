import { ComponentProps, ReactNode } from "react";
import { cn } from "../lib/cn";

interface HeadingProps extends ComponentProps<"h2"> {
  children: ReactNode;
  className?: string;
}

export function Heading({ className, children, ...rest }: HeadingProps) {
  return (
    <h2 className={cn("reveal-up headline-md", className)} {...rest}>
      {children}
    </h2>
  );
}
