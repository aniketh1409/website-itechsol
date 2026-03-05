"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/capability-statement", label: "Capability Statement" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-shell mx-auto w-full max-w-6xl px-6 py-4">
        <Link href="/" className="logo-mark">
          Itechsol
          <span>Innovative Technical Solutions</span>
        </Link>

        <nav className="header-nav">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact#enquiry" className="btn-primary hidden md:inline-flex">
          Request a Demo
        </Link>
      </div>
    </header>
  );
}
