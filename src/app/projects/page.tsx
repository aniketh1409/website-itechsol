import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

const industries = [
  "Process industries (Oil and Gas, Gas Processing, Petrochemical, Refining and Multi-Product Pipelines and Distribution)",
  "EPC and Infrastructure Projects",
  "Process and Manufacturing Industries",
  "Power, Utilities and Energy Facilities",
  "Metals and Mining Industries",
  "Industrial Warehousing, Data Centres and Logistics",
];

const highlights = [
  {
    title: "Asset visibility enablement",
    description:
      "RFID and digital monitoring deployed to improve traceability across high-value operations and distributed facilities.",
  },
  {
    title: "Industrial locking and access hardening",
    description:
      "Smart locking and controlled access workflows engineered for harsh and high-risk infrastructure environments.",
  },
  {
    title: "Accountability and key governance",
    description:
      "Automated key and card issuance, return tracking, and audit trails to reduce unauthorized handling and improve compliance.",
  },
];

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Industries served by Itechsol and project capability highlights across process, energy, infrastructure, and logistics operations.",
};

export default function ProjectsPage() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Industries and projects"
        title="Deployment experience across critical sectors"
        description="Itechsol solutions are configured for operational realities in high-compliance, safety-sensitive, and complex industrial sites."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {industries.map((industry) => (
          <article key={industry} className="card-shell p-5">
            <p className="font-semibold text-slate-800">{industry}</p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <SectionHeading
          eyebrow="Capability highlights"
          title="Representative delivery focus areas"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="card-shell p-6">
              <h3 className="font-rajdhani text-2xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/contact#enquiry" className="btn-primary">
          Discuss Your Project
        </Link>
        <Link href="/solutions" className="btn-secondary">
          Explore Solutions
        </Link>
      </div>
    </section>
  );
}
