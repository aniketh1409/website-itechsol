import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { SectionHeading } from "@/components/section-heading";

const industries = [
  "Process Industries: Oil & Gas, Gas Processing, Petrochemical, Refining, Distribution",
  "EPC & Infrastructure Projects",
  "Process & Manufacturing Industries",
  "Power, Utilities & Energy Facilities",
  "Metals & Mining Industries",
  "Industrial Warehousing, Data Centres & Logistics",
];

const coreSolutions = [
  "Advanced Asset Tracking Solutions",
  "Smart Industrial Locking & Access Management for harsh/hazardous environments",
  "Intelligent Key/Card Management & Accountability Platforms",
  "Customized Security & Operational Control Solutions",
];

const technicalCapabilities = [
  "RFID and IoT-enabled monitoring architecture",
  "Audit-trail-driven smart lock and access controls",
  "Integration readiness for ERP, CCTV, RTU, and SCADA systems",
  "Engineering-led deployment for site-specific compliance and risk profiles",
];

const projectHighlights = [
  "Centralized asset visibility implementations for multi-site operations",
  "Industrial lock and access hardening for critical infrastructure",
  "Digital key accountability systems reducing unauthorized access exposure",
];

export const metadata: Metadata = {
  title: "Capability Statement",
  description:
    "Itechsol corporate capability statement covering solutions, technical strengths, industries served, and contact details.",
};

export default function CapabilityStatementPage() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Corporate Capability Statement"
        title="Two-Page Profile for Customers, Contractors, and EPC Stakeholders"
      />

      <div className="mt-8 flex flex-wrap gap-3 print:hidden">
        <PrintButton />
        <Link href="/contact#enquiry" className="btn-secondary">
          Request a Demo
        </Link>
      </div>

      <article className="capability-page card-shell mt-8 p-7">
        <p className="section-eyebrow">Page 1</p>
        <h2 className="font-rajdhani mt-2 text-3xl font-bold uppercase text-slate-900">
          About, Vision, Mission, Industries Served, Core Solutions
        </h2>

        <div className="mt-5 space-y-4 text-slate-700">
          <p>
            Itechsol (Innovative Technical Solutions) is a specialized
            technology solutions provider delivering engineered systems for
            asset visibility, access control, key management, and infrastructure
            security.
          </p>
          <p>
            Our vision is to be a trusted technology partner for industries by
            delivering intelligent, secure, and scalable solutions that
            transform operational control and infrastructure protection.
          </p>
          <p>
            Our mission is to improve safety, security, traceability, and
            accountability through commercially viable and easy-to-operate
            technologies integrated into existing operations.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <p className="section-eyebrow">Industries Served</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {industries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-eyebrow">Core Solutions</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {coreSolutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <article className="capability-page card-shell mt-6 p-7">
        <p className="section-eyebrow">Page 2</p>
        <h2 className="font-rajdhani mt-2 text-3xl font-bold uppercase text-slate-900">
          Technical Capabilities, Project Highlights, Contact
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <p className="section-eyebrow">Technical Capabilities</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {technicalCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-eyebrow">Key Project Highlights</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {projectHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-slate-300 bg-slate-50 p-5 text-slate-700">
          <p className="section-eyebrow">Contact Information</p>
          <p className="mt-2">Itechsol, Dubai, UAE</p>
          <p>Phone: +971 4 000 0000</p>
          <p>Email: info@itechsol.ae</p>
          <p>Website: www.itechsol.ae</p>
        </div>
      </article>
    </section>
  );
}
