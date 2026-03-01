import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

const coreSolutions = [
  "Smart Asset Tracking Solutions: visibility and traceability of critical assets and manufacturing processes.",
  "Industrial Locking Solutions: secure infrastructure and facilities with intelligent locking solutions for harsh and hazardous environments.",
  "Intelligent Access Management Solutions: secure data centres, facilities, and racks with intelligent access solutions.",
  "Intelligent Key and Card Management Systems: digitally controlled systems that eliminate unauthorized access and automate management of keys and industrial cards.",
];

const portfolioItems = [
  "Advanced Asset Tracking Solutions",
  "Smart Industrial Locking and Access Management Systems for Harsh and Hazardous Areas",
  "Intelligent Key/Card Management and Accountability Platforms",
  "Customized Security and Operational Control Solutions",
];

const missionPoints = [
  "To design and deliver customized smart solutions that enhance safety, security, and visibility across industrial operations.",
  "To reduce operational risk and strengthen accountability through intelligent system integration.",
  "To provide commercially viable, easy-to-operate technologies that add measurable value to our customers' businesses.",
  "To support contractors and end users with reliable solutions that meet industry standards and compliance requirements.",
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Itechsol: engineering-driven technology partner for secure industrial operations, visibility, traceability, and risk reduction.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-shell">
        <SectionHeading
          eyebrow="About Itechsol"
          title="Specialized technology solutions for critical industrial operations"
          description="Itechsol (Innovative Technical Solutions) is a specialized technology solutions provider serving industries and contractors with customized, intelligent systems and solutions designed to strengthen operational processes."
        />
        <div className="mt-8 card-shell space-y-5 p-7 text-base leading-7 text-slate-700">
          <p>
            We deliver engineered and customized solutions across design,
            engineering, configuration, assembly, testing, commissioning,
            training, and handover. These solutions address critical challenges
            related to asset visibility, access control, key management, and
            infrastructure security, ensuring higher levels of safety,
            traceability, accountability, and operational efficiency.
          </p>
          <p>
            Understanding the complexity of industrial environments, we adopt a
            consultative and engineering-driven approach. Our team conducts site
            surveys and evaluates site conditions, operational workflows,
            compliance requirements, and risk exposure before designing solutions
            that integrate seamlessly into existing systems.
          </p>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeading
          eyebrow="Our core solutions"
          title="Comprehensive portfolio for visibility, access, and accountability"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {coreSolutions.map((item) => (
            <article key={item} className="card-shell p-6 text-slate-700">
              {item}
            </article>
          ))}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {portfolioItems.map((item) => (
            <div key={item} className="rounded-xl border border-slate-300 bg-white p-4">
              <p className="font-semibold text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="card-shell p-6">
            <p className="section-eyebrow">Our vision</p>
            <p className="mt-4 text-base leading-7 text-slate-700">
              To become a trusted technology partner for industries, delivering
              intelligent, secure, and scalable solutions that transform asset
              tracking, access management, operational control, and
              infrastructure protection.
            </p>
          </article>
          <article className="card-shell p-6">
            <p className="section-eyebrow">Our commitment</p>
            <p className="mt-4 text-base leading-7 text-slate-700">
              We help organizations strengthen control, improve traceability,
              reduce risk, and enhance productivity, turning operational
              challenges into intelligent and reliable systems.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeading eyebrow="Mission" title="How we deliver measurable value" />
        <div className="mt-8 grid gap-4">
          {missionPoints.map((item) => (
            <div key={item} className="card-shell flex items-start gap-3 p-5">
              <span className="mt-1 text-lg text-teal-700">*</span>
              <p className="text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
