import { useCallback, useEffect, useRef, useState } from "react";
import { initialPositionState, navOptions } from "../constants/nav-options";
import { getElementPosition } from "../helpers/get-element-position";
import { cn } from "../lib/cn";

interface NavProps {
  navOpen: boolean;
}

export function Nav({ navOpen }: NavProps) {
  const [elementPosition, setElementPosition] = useState(initialPositionState);
  const [activeLink, setActiveLink] = useState<number | null>(1);
  const firstAnchorRef = useRef<HTMLAnchorElement | null>(null);

  const activeCurrentLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number,
  ) => {
    setActiveLink(id);

    const target = e.target as HTMLAnchorElement;

    setElementPosition(getElementPosition(target));
  };

  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setElementPosition(initialPositionState);
      setActiveLink(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (firstAnchorRef.current) {
      setElementPosition(getElementPosition(firstAnchorRef.current));
    }
  }, []);

  return (
    <nav className={cn("navbar", navOpen && "active")}>
      {navOptions.map(({ id, className, label, link }) => (
        <a
          key={id}
          ref={id === 1 ? firstAnchorRef : null}
          className={cn("nav-link", className, id === activeLink && "active")}
          onClick={(e) => activeCurrentLink(e, id)}
          href={link}
        >
          {label}
        </a>
      ))}
      <div
        style={{
          top: elementPosition.top,
          left: elementPosition.left,
          height: elementPosition.height,
          width: elementPosition.width,
        }}
        className="active-box"
      />
    </nav>
  );
}
