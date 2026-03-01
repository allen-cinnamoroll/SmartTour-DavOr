import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#signup", label: "Sign Up" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="text-lg font-semibold tracking-tight text-sky-300 sm:text-xl"
        >
          Smart Tour{" "}
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            DavOr
          </span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

