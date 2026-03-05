import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";

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

const liveSignals = [
  "Smart lock events monitored",
  "RFID traceability insights",
  "Operational dashboard visibility",
];

const featureTags = [
  "Asset visibility",
  "Access control",
  "Key accountability",
  "Operational compliance",
];

const heroMetrics = [
  { label: "Asset intelligence", value: "RFID + IoT visibility" },
  { label: "Access assurance", value: "Audit-ready access control" },
  { label: "Operational governance", value: "Centralized control insights" },
];

export default function Home() {
  return (
    <>
      <section className="section-shell hero-glow">
        <div className="section-panel hero-main-panel grid gap-10 p-5 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:p-7">
          <div className="space-y-6 section-fade">
            <p className="section-eyebrow">Engineered industrial control</p>
            <h1 className="section-title text-[clamp(2.05rem,5.4vw,3.85rem)] leading-[0.96] text-slate-900">
              Delivering engineered, innovative tracking and access control
              systems, alongside turnkey solutions for critical and demanding
              industries and applications.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              Smart Asset Tracking Solutions &bull; Industrial Locking Solutions
              &bull; Intelligent Access Management Solutions &bull; Innovative
              Key and Card Management Solutions
            </p>
            <p className="text-base font-semibold tracking-[0.04em] text-teal-700">
              Delivering engineered, innovative tracking and access control
              systems, alongside turnkey solutions for critical and demanding
              industries and applications.
            </p>

            <div className="tag-cloud">
              {featureTags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact#enquiry" className="btn-primary">
                Request a Demo
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Our Experts
              </Link>
            </div>

            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="hero-metric">
                  <b>{metric.label}</b>
                  <span>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel hero-visual section-fade section-fade-delay-1 p-3">
            <div className="hero-image-layer relative h-[360px] overflow-hidden rounded-xl border border-white/20">
              <Image
                src="/images/industrial-plant.jpg"
                alt="Industrial refinery with smart locking and RFID operations"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/22 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:grid-cols-3">
                {liveSignals.map((signal) => (
                  <p key={signal} className="glass-pill">
                    {signal}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="section-panel p-5 lg:p-6">
          <SectionHeading
            className="section-fade"
            eyebrow="About iTechSol"
            title="Customized intelligent systems for safety, security, visibility, and operational efficiency"
            description="iTechSol (Innovative Technical Solutions) delivers customized, smart, and intelligent systems that enhance safety, security, visibility, and operational efficiency. Serving various industries, contractors, and customers, our solutions integrate seamlessly into operations to provide measurable value and control."
          />
          <div className="section-divider" />
          <div className="mt-5 section-fade section-fade-delay-1">
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="section-panel p-5 lg:p-6">
          <SectionHeading
            className="section-fade"
            eyebrow="Our solutions"
            title="Smart systems for asset traceability, locking, access control, and key governance"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {solutionSnapshot.map((item, index) => (
              <SpotlightCard
                key={item.title}
                className={`card-shell p-6 section-fade section-fade-delay-${
                  (index % 3) + 1
                }`}
              >
                <h3 className="font-rajdhani text-2xl font-bold leading-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
          <div className="mt-8 section-fade section-fade-delay-1">
            <Link href="/solutions" className="btn-primary">
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="section-panel p-5 lg:p-6">
          <SectionHeading
            className="section-fade"
            eyebrow="Industries we serve"
            title="Built for process, energy, infrastructure, and logistics operations"
          />
          <div className="mt-8 card-shell grid-dot-bg p-7 section-fade section-fade-delay-1">
            <div className="relative grid gap-3 text-base leading-7 text-slate-700 md:grid-cols-2">
              {industries.map((item) => (
                <p key={item} className="rounded-lg bg-white/70 px-4 py-3">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-8 section-fade section-fade-delay-2">
            <Link href="/projects" className="btn-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="section-panel p-5 lg:p-6">
          <SectionHeading
            className="section-fade"
            eyebrow="Why choose iTechSol"
            title="Engineering depth with practical operational impact"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {differentiators.map((item, index) => (
              <SpotlightCard
                key={item}
                className={`card-shell flex items-start gap-3 p-5 section-fade section-fade-delay-${
                  (index % 3) + 1
                }`}
              >
                <span className="mt-1 text-lg text-teal-700">*</span>
                <p className="text-base font-semibold text-slate-800">{item}</p>
              </SpotlightCard>
            ))}
          </div>
          <div className="mt-8 section-fade section-fade-delay-2">
            <Link href="/contact" className="btn-primary">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

