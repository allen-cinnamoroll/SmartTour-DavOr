import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#signup", label: "Sign Up" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="text-lg font-semibold tracking-tight text-sky-600 sm:text-xl"
        >
          Smart Tour{" "}
          <span className="text-sky-500">
            DavOr
          </span>
        </Link>

        <div className="flex items-center gap-4 text-sm font-medium text-slate-700">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-sky-600"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#signup"
            className="rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}

