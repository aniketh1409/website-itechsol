import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";

const solutions = [
  {
    title: "Advanced Asset Tracking Solutions",
    learnMoreHref: "/solutions/asset-tracking",
    learnMoreLabel: "View RFID tracking types",
    bullets: [
      "Real-time RFID and IoT-enabled tracking of assets, equipment, and materials.",
      "Complete visibility across yards, manufacturing facilities, warehouses, and industrial sites.",
      "Alerts for asset movement, missing items, and status changes.",
      "Integration with ERP and management systems for operational control.",
    ],
    benefits: [
      "Improved efficiency and accountability",
      "Reduced operational losses",
      "Enhanced traceability and compliance",
    ],
  },
  {
    title: "Smart Industrial Locking Solutions",
    bullets: [
      "Configurable access control for sites, data centres, and critical infrastructure.",
      "Smart locks with audit trails for all access events.",
      "Integration with third party systems for centralized control.",
      "Designed for industrial, harsh, and hazardous environments.",
    ],
    benefits: [
      "Enhanced security and restricted access",
      "Operational safety and compliance",
      "Reduced human error and unauthorized access",
    ],
  },
  {
    title: "Intelligent Access Management Solutions",
    bullets: [
      "Configurable access control for data centres and racks.",
      "Smart locks with audit trails for all access events and remote operations.",
      "Integration with third party systems for centralized control.",
      "Designed for industrial environments.",
    ],
    benefits: [
      "Enhanced security and restricted access",
      "Operational safety and compliance",
      "Reduced human error and unauthorized access",
    ],
  },
  {
    title: "Intelligent Key and Card Management Solutions",
    bullets: [
      "Digital key tracking and controlled access.",
      "Real-time monitoring of key issuance and returns.",
      "Alerts for overdue or misplaced keys.",
      "Seamless integration with locking systems for complete asset security.",
    ],
    benefits: [
      "Zero unauthorized access",
      "Full accountability of critical assets",
      "Operational transparency for management",
    ],
  },
];

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore iTechSol solutions: advanced RFID asset tracking, smart industrial locking, intelligent access management, and digital key and card management.",
};

export default function SolutionsPage() {
  return (
    <section className="section-shell">
      <div className="section-panel p-5 lg:p-6">
        <SectionHeading
          className="section-fade"
          eyebrow="Solutions"
          title="Engineered systems for security, traceability, and operational control"
          description="Our comprehensive solutions are designed to perform reliably in demanding industrial environments, supporting governance, reduced risk, and improved decision-making through real-time visibility."
        />

        <div className="tag-cloud mt-5 section-fade section-fade-delay-1">
          <span className="tag-chip">RFID and IoT</span>
          <span className="tag-chip">Smart locking</span>
          <span className="tag-chip">Access management</span>
          <span className="tag-chip">Key and card accountability</span>
        </div>

        <div className="mt-10 grid gap-6">
          {solutions.map((solution, index) => (
            <SpotlightCard
              key={solution.title}
              className={`card-shell p-7 section-fade section-fade-delay-${(index % 3) + 1}`}
            >
              <h2 className="font-rajdhani text-3xl font-bold leading-tight text-slate-900">
                {solution.title}
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                {solution.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="mt-5 border-t border-slate-200 pt-5">
                <p className="section-eyebrow">Benefits</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {solution.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="rounded-full border border-teal-200 bg-teal-50 px-4 py-1 text-sm font-semibold text-teal-900"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              {solution.learnMoreHref ? (
                <div className="solution-cta-row mt-5">
                  <div>
                    <p className="solution-cta-row__eyebrow">Learn more</p>
                    <p className="text-sm leading-6 text-slate-600">
                      See portable and fixed RFID reader options, plus in-house and
                      cloud-based deployments.
                    </p>
                  </div>
                  <Link href={solution.learnMoreHref} className="btn-secondary">
                    {solution.learnMoreLabel ?? "Learn More"}
                  </Link>
                </div>
              ) : null}
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 section-fade section-fade-delay-2">
          <Link href="/contact#enquiry" className="btn-primary">
            Request a Demo
          </Link>
          <Link href="/contact" className="btn-secondary">
            Talk to Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
}

