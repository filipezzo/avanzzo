import { Code, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "./link";
import { Nav } from "./nav";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleChangeNavStatus = () => {
    setIsNavOpen((s) => !s);
  };

  return (
    <header className="left-0 top-0 z-40 flex h-20 w-full items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0 md:fixed">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 md:grid md:grid-cols-[1fr,3fr,1fr] md:px-6">
        <h1>
          <a href="/" className="logo">
            <Code size={40} />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button onClick={handleChangeNavStatus} className="menu-btn">
            {isNavOpen ? <X /> : <Menu />}
          </button>
          <Nav navOpen={isNavOpen} />
        </div>
        <Link href="#contato" className="max-md:hidden md:justify-self-end">
          Contato
        </Link>
      </div>
    </header>
  );
}
