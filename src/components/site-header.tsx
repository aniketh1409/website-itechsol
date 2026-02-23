import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="logo-mark">
          Itechsol
          <span>Innovative Technical Solutions</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm font-semibold uppercase tracking-[0.14em]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact#enquiry" className="btn-primary hidden md:inline-flex">
          Request a Demo
        </Link>
      </div>
    </header>
  );
}
