import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";

const trackingSolutions = [
  {
    title: "Asset tracking using RFID technology with portable readers",
    summary:
      "Portable readers are ideal for flexible field operations where assets move across yards, workshops, warehouses, and project locations. Operators can scan tagged equipment on demand, verify status instantly, and capture data without fixed infrastructure at every checkpoint.",
    points: [
      "Suited for roaming inspections, cycle counts, and exception handling.",
      "Helps field teams confirm asset identity, location, and movement in real time.",
      "Works well for mobile maintenance crews and temporary laydown areas.",
    ],
    deployments: [
      {
        title: "In-house solution",
        description:
          "The RFID application, database, and reporting tools are hosted within the customer premises. This approach keeps architecture fully internal, supports local governance requirements, and integrates directly with on-site systems and workflows.",
      },
      {
        title: "Cloud-based solution",
        description:
          "The reader data is synchronized to a secured cloud platform for centralized dashboards, remote access, and multi-site visibility. This model is practical when management teams need access across locations with lower on-site IT overhead.",
      },
    ],
    labels: [
      { text: "Portable reader", className: "rfid-scene__point--portable-reader" },
      { text: "Tagged valve set", className: "rfid-scene__point--portable-asset-a" },
      { text: "Field scan sync", className: "rfid-scene__point--portable-asset-b" },
    ],
    sceneClassName: "rfid-scene--portable",
  },
  {
    title: "Asset tracking using RFID technology with fixed readers",
    summary:
      "Fixed reader architecture is used where assets pass through defined checkpoints such as gates, warehouse zones, process lines, or storage corridors. The system captures movements automatically, creating continuous visibility without relying on manual scans at every event.",
    points: [
      "Best for controlled access points, transfer zones, and high-volume movements.",
      "Builds an automated audit trail for entry, exit, and status changes.",
      "Supports integrated alerts when assets move through unauthorized paths.",
    ],
    deployments: [
      {
        title: "In-house solution",
        description:
          "Reader controllers, middleware, and dashboards are deployed on the customer network inside the premises. This is suitable for facilities that require local hosting, direct OT or ERP integration, and tighter control over data residency.",
      },
      {
        title: "Cloud-based solution",
        description:
          "Fixed reader events are pushed to a cloud platform for centralized monitoring, analytics, and management across sites. It is a strong option for organizations that want scalable reporting and unified oversight without maintaining all application layers on site.",
      },
    ],
    labels: [
      { text: "Reader gate", className: "rfid-scene__point--fixed-reader-a" },
      { text: "Tracked pallet lane", className: "rfid-scene__point--fixed-asset" },
      { text: "Central control", className: "rfid-scene__point--fixed-reader-b" },
    ],
    sceneClassName: "rfid-scene--fixed",
  },
];

export const metadata: Metadata = {
  title: "Asset Tracking Solutions",
  description:
    "Explore RFID asset tracking solutions from iTechSol, including portable reader and fixed reader deployments with in-house and cloud-based architectures.",
};

export default function AssetTrackingPage() {
  return (
    <section className="section-shell">
      <div className="section-panel p-5 lg:p-6">
        <SectionHeading
          className="section-fade"
          eyebrow="Asset Tracking"
          title="RFID asset tracking architectures for field mobility and fixed-site visibility"
          description="iTechSol delivers RFID-based asset tracking systems that can be configured around portable readers or fixed readers, with in-house or cloud-based deployment models depending on site requirements, operational control, and reporting needs."
        />

        <div className="mt-5 flex flex-wrap gap-3 section-fade section-fade-delay-1">
          <Link href="/solutions" className="btn-secondary">
            Back to Solutions
          </Link>
          <Link href="/contact#enquiry" className="btn-primary">
            Discuss Your Requirement
          </Link>
        </div>

        <div className="mt-10 grid gap-6">
          {trackingSolutions.map((solution, index) => (
            <SpotlightCard
              key={solution.title}
              className={`card-shell p-6 lg:p-7 section-fade section-fade-delay-${(index % 3) + 1}`}
            >
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.95fr] lg:items-center">
                <div>
                  <p className="section-eyebrow">Tracking type {index + 1}</p>
                  <h2 className="mt-4 font-rajdhani text-3xl font-bold leading-tight text-slate-900">
                    {solution.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-700">{solution.summary}</p>

                  <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700">
                    {solution.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="scene-shell">
                  <div className={`rfid-scene ${solution.sceneClassName}`}>
                    <div className="rfid-scene__mesh" />
                    <div className="rfid-scene__panel-label">Hover the markers</div>
                    <div className="rfid-scene__device" />
                    <div className="rfid-scene__asset rfid-scene__asset--one" />
                    <div className="rfid-scene__asset rfid-scene__asset--two" />
                    <div className="rfid-scene__asset rfid-scene__asset--three" />
                    {solution.labels.map((label) => (
                      <div key={label.text} className={`rfid-scene__point ${label.className}`}>
                        <span className="rfid-scene__pulse" />
                        <span className="rfid-scene__callout">{label.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {solution.deployments.map((deployment) => (
                  <div key={deployment.title} className="deployment-card">
                    <p className="deployment-card__eyebrow">{deployment.title}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {deployment.description}
                    </p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="intro-tile section-fade section-fade-delay-1">
            <b>Operational fit</b>
            <span>Portable readers support mobile workflows, while fixed readers suit controlled checkpoints.</span>
          </div>
          <div className="intro-tile section-fade section-fade-delay-2">
            <b>Deployment model</b>
            <span>Both options can be delivered as in-house architecture or a secured cloud-based platform.</span>
          </div>
          <div className="intro-tile section-fade section-fade-delay-3">
            <b>Business outcome</b>
            <span>Improved traceability, faster asset verification, and stronger control over movement history.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
