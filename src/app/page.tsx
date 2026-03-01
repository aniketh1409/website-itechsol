import Image from "next/image";
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
      "Secure infrastructure and facilities with intelligent locking for harsh and hazardous environments.",
  },
  {
    title: "Intelligent Access Management Solutions",
    description:
      "Secure data centres, facilities, and racks with intelligent access solutions.",
  },
  {
    title: "Intelligent Key and Card Management Solutions",
    description:
      "Digitally controlled systems that eliminate unauthorized access and automate key and card management.",
  },
];

const industries = [
  "Process industries (Oil and Gas, Gas Processing, Petrochemical, Refining and Multi-Product Pipelines and Distribution)",
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
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="section-eyebrow">Engineered industrial control</p>
            <h1 className="section-title text-[clamp(2.1rem,6vw,4rem)] leading-[0.95]">
              Engineered and intelligent control systems and solutions for
              critical and demanding environment and applications
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              Smart Asset Tracking Solutions &bull; Industrial Locking Solutions
              &bull; Intelligent Access Management Solutions &bull; Innovative
              Key and Card Management Solutions
            </p>
            <p className="text-base font-semibold tracking-[0.04em] text-teal-700">
              Smart Systems. Engineered Solutions. Visible Control. Secure
              Operations.
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

          <div className="surface-panel overflow-hidden p-3">
            <div className="relative h-[360px] overflow-hidden rounded-xl">
              <Image
                src="/images/industrial-plant.jpg"
                alt="Industrial refinery with digital overlay concept"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:grid-cols-3">
                <p className="rounded-lg border border-white/25 bg-slate-900/55 px-3 py-2 text-xs text-white">
                  Smart locks
                </p>
                <p className="rounded-lg border border-white/25 bg-slate-900/55 px-3 py-2 text-xs text-white">
                  RFID tracking
                </p>
                <p className="rounded-lg border border-white/25 bg-slate-900/55 px-3 py-2 text-xs text-white">
                  Dashboard visibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="About Itechsol"
          title="Customized intelligent systems for safety, security, visibility, and operational efficiency"
          description="Itechsol (Innovative Technical Solutions) delivers customized, smart, and intelligent systems that enhance safety, security, visibility, and operational efficiency. Serving various industries, contractors, and customers, our solutions integrate seamlessly into operations to provide measurable value and control."
        />
        <div className="mt-8">
          <Link href="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeading
          eyebrow="Our solutions"
          title="Smart systems for asset traceability, locking, access control, and key governance"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {solutionSnapshot.map((item) => (
            <article key={item.title} className="card-shell p-6">
              <h3 className="font-rajdhani text-2xl font-bold leading-tight text-slate-900">
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
          eyebrow="Industries we serve"
          title="Built for process, energy, infrastructure, and logistics operations"
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
          eyebrow="Why choose Itechsol"
          title="Engineering depth with practical operational impact"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item} className="card-shell flex items-start gap-3 p-5">
              <span className="mt-1 text-lg text-teal-700">*</span>
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
