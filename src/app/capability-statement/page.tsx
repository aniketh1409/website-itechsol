import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { SectionHeading } from "@/components/section-heading";

const industries = [
  "Process industries: Oil and Gas, Gas Processing, Petrochemical, Refining and Multi-Product Pipelines and Distribution",
  "EPC and Infrastructure Projects",
  "Process and Manufacturing Industries",
  "Power, Utilities and Energy Facilities",
  "Metals and Mining Industries",
  "Industrial Warehousing, Data Centres and Logistics",
];

const coreSolutions = [
  "Advanced Asset Tracking Solutions",
  "Smart Industrial Locking and Access Management for harsh and hazardous environments",
  "Intelligent Key and Card Management and Accountability Platforms",
  "Customized Security and Operational Control Solutions",
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
        eyebrow="Corporate capability statement"
        title="Two-page profile for customers, contractors, and EPC stakeholders"
      />

      <div className="mt-8 flex flex-wrap gap-3 print:hidden">
        <PrintButton />
        <Link href="/contact#enquiry" className="btn-secondary">
          Request a Demo
        </Link>
      </div>

      <article className="capability-page card-shell mt-8 p-7">
        <p className="section-eyebrow">Page 1</p>
        <h2 className="font-rajdhani mt-2 text-3xl font-bold text-slate-900">
          About, vision, mission, industries served, and core solutions
        </h2>

        <div className="mt-5 space-y-4 text-slate-700">
          <p>
            Itechsol (Innovative Technical Solutions) is a specialized
            technology solutions provider delivering engineered systems for
            asset visibility, access control, key management, and infrastructure
            security.
          </p>
          <p>
            Our vision is to become a trusted technology partner for industries,
            delivering intelligent, secure, and scalable solutions that
            transform asset tracking, access management, operational control, and
            infrastructure protection.
          </p>
          <p>
            Our mission is to improve safety, security, traceability, and
            accountability through commercially viable and easy-to-operate
            technologies integrated into existing operations.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <p className="section-eyebrow">Industries served</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {industries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-eyebrow">Core solutions</p>
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
        <h2 className="font-rajdhani mt-2 text-3xl font-bold text-slate-900">
          Detailed solutions, technical capabilities, project highlights, and
          contact information
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <p className="section-eyebrow">Technical capabilities</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {technicalCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-eyebrow">Key project highlights</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {projectHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-slate-300 bg-slate-50 p-5 text-slate-700">
          <p className="section-eyebrow">Contact information</p>
          <p className="mt-2">Itechsol, Dubai, UAE</p>
          <p>Phone: +971 4 000 0000</p>
          <p>Email: info@itechsol-meai.com</p>
          <p>Website: www.itechsol-meai.com</p>
        </div>
      </article>
    </section>
  );
}
