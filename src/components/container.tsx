import { ComponentProps } from "react";
import { cn } from "../lib/cn";

interface ContainerProps extends ComponentProps<"div"> {
  className?: string;
}

export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div className={cn("container", className)} {...rest}>
      {children}
    </div>
  );
}
