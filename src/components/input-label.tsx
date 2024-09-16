import { ComponentProps, useId } from "react";
import { cn } from "../lib/cn";

interface InputProps extends ComponentProps<"input"> {
  className?: string;
  label: string;
  textarea?: boolean;
}

export function InputLabel({
  textarea = false,
  label,
  className,
  ...rest
}: InputProps) {
  const id = useId();
  if (textarea) {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="block text-sm font-normal text-gray-200">
          {label}
        </label>
        <textarea
          name="mensagem"
          id={id}
          className={cn(
            "block max-h-72 min-h-32 w-full resize-y rounded-xl bg-zinc-800 p-3 text-sm outline-none ring-1 ring-inset ring-transparent transition-shadow placeholder:text-zinc-400 hover:ring-zinc-50/5 focus:ring-2 focus:ring-sky-400",
          )}
          required
        />
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="block text-sm font-normal text-gray-200">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "block h-10 w-full rounded-xl bg-zinc-800 p-3 text-sm outline-none ring-1 ring-inset ring-transparent transition-shadow placeholder:text-zinc-400 hover:ring-zinc-50/5 focus:ring-2 focus:ring-sky-400",
          className,
        )}
        required
        {...rest}
      />
    </div>
  );
}
