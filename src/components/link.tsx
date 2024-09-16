import { ComponentProps } from "react";
import { cn } from "../lib/cn";

interface LinkProps extends ComponentProps<"a"> {
  className?: string;
  variant?: "primary" | "secondary" | "ocean" | "brown";
}

export function Link({
  className,
  children,
  variant = "primary",
  ...rest
}: LinkProps) {
  return (
    <a
      className={cn(
        "group flex h-10 items-center justify-center gap-3 rounded-lg bg-zinc-100 p-4 text-sm font-medium text-black ring-1 ring-inset ring-zinc-50/5 transition-all hover:scale-105 hover:opacity-90",
        className,
        variant === "secondary" &&
          "bg-zinc-50 text-zinc-900 active:bg-zinc-50/80",
        variant === "ocean" &&
          "bg-sky-400 text-zinc-950 hover:bg-sky-300 active:bg-sky-400",
        variant === "brown" &&
          "bg-zinc-800 text-white hover:bg-zinc-700 active:bg-zinc-800",
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
