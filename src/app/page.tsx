import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

const solutionSnapshot = [
  {
    title: "Smart Asset Tracking Solutions",
    description:
      "Visibility and traceability of critical assets and manufacturing processes.",
  },
  {
    title: "Industrial Smart Locking Solutions",
    description:
      "Secure infrastructure and facilities in harsh and hazardous environments.",
  },
  {
    title: "Intelligent Access Management Solutions",
    description:
      "Secure data centres, facilities, and racks with intelligent access controls.",
  },
  {
    title: "Intelligent Key & Card Management Solutions",
    description:
      "Digitally controlled systems to eliminate unauthorized access and automate key/card operations.",
  },
];

const industries = [
  "Process Industries (Oil and Gas, Gas Processing, Petrochemical, Refining and Distribution)",
  "EPC and Infrastructure Projects",
  "Process and Manufacturing Industries",
  "Power, Utilities and Energy Facilities",
  "Metals and Mining Industries",
  "Industrial Warehousing, Data Centres and Logistics",
];

const differentiators = [
  "Engineering-led solution design",
  "Industry-focused expertise",
  "Custom-built systems tailored to operational needs",
  "Seamless integration with existing infrastructure",
  "Enhanced traceability and compliance support",
  "Scalable solutions for multi-site operations",
];

export default function Home() {
  return (
    <>
      <section className="hero-glow">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <p className="section-eyebrow">Engineering Control Infrastructure</p>
            <h1 className="section-title text-[clamp(2.1rem,6vw,4rem)] leading-[0.95]">
              Engineering Intelligent Control for Critical &amp; Demanding
              Operations
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              Smart Asset Tracking Solutions • Industrial Locking Solutions •
              Intelligent Access Management Solutions • Innovative Key &amp;
              Card Management Solutions
            </p>
            <p className="text-base font-semibold uppercase tracking-[0.18em] text-teal-700">
              Smart Systems. Secure Operations. Visible Control.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#enquiry" className="btn-primary">
                Request a Demo
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Our Experts
              </Link>
            </div>
          </div>
          <div className="surface-panel grid gap-4 p-6 text-sm text-slate-100">
            <p className="section-eyebrow text-teal-200">Live Operations View</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-300">
                  Smart Locks
                </p>
                <p className="mt-2 font-semibold">412 Active Access Points</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-300">
                  RFID Tracking
                </p>
                <p className="mt-2 font-semibold">98.6% Traceability Coverage</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-4 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-300">
                  Control Dashboard
                </p>
                <p className="mt-2 font-semibold">
                  Real-time monitoring for plants, data centres, and EPC sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="About Itechsol"
          title="Customized Intelligent Systems for Safety, Security, and Operational Visibility"
          description="Itechsol delivers customized, smart, and intelligent systems that enhance safety, security, visibility, and operational efficiency. Serving various industries, contractors, and customers, our solutions integrate seamlessly into operations to provide measurable value and control."
        />
        <div className="mt-8">
          <Link href="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeading
          eyebrow="Our Solutions"
          title="Integrated Platforms to Control Assets, Access, and Infrastructure"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {solutionSnapshot.map((item) => (
            <article key={item.title} className="card-shell p-6">
              <h3 className="font-rajdhani text-2xl font-bold uppercase leading-tight text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/solutions" className="btn-primary">
            Explore Our Solutions
          </Link>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Built for Critical Process, Energy, Infrastructure, and Logistics Operations"
        />
        <div className="mt-8 card-shell grid-dot-bg p-7">
          <div className="relative grid gap-3 text-base leading-7 text-slate-700 md:grid-cols-2">
            {industries.map((item) => (
              <p key={item} className="rounded-lg bg-white/70 px-4 py-3">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Link href="/projects" className="btn-secondary">
            View Case Studies
          </Link>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeading
          eyebrow="Why Choose Itechsol"
          title="Technical Depth with Real Operational Impact"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item} className="card-shell flex items-start gap-3 p-5">
              <span className="mt-1 text-lg text-teal-700">✔</span>
              <p className="text-base font-semibold text-slate-800">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
