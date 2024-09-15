import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return <h2 className="headline-md">{children}</h2>;
}
