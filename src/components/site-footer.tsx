import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Our Solutions" },
  { href: "/projects", label: "Industries & Projects" },
  { href: "/capability-statement", label: "Capability Statement" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-shell">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 md:grid-cols-[1.7fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="footer-kicker">Itechsol</p>
          <p className="max-w-xl text-sm leading-6 text-slate-300">
            At Itechsol, we do not simply provide products. We engineer
            intelligent systems that strengthen control, enhance security, and
            empower organizations to operate with confidence.
          </p>
          <p className="text-sm font-semibold tracking-[0.04em] text-teal-300">
            Smart Systems. Secure Operations. Visible Control.
          </p>
        </div>
        <div className="space-y-3">
          <p className="footer-kicker">Quick Links</p>
          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href} className="footer-link">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="space-y-3 text-sm text-slate-300">
          <p className="footer-kicker">Reach Us</p>
          <p>UAE Office, Dubai</p>
          <a href="tel:+97140000000" className="footer-link">
            +971 4 000 0000
          </a>
          <a href="mailto:info@itechsol-meai.com" className="footer-link">
            info@itechsol-meai.com
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs tracking-[0.12em] text-slate-400">
        (c) {year} Itechsol. All rights reserved.
      </div>
    </footer>
  );
}
