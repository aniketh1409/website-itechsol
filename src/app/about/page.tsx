import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

const coreSolutions = [
  "Smart Asset Tracking Solutions: visibility and traceability of critical assets and manufacturing processes.",
  "Industrial Locking Solutions: secure infrastructure and facilities with intelligent locking for harsh and hazardous environments.",
  "Intelligent Access Management Solutions: secure data centres, facilities, and racks with intelligent access control.",
  "Intelligent Key & Card Management Systems: digitally controlled systems to eliminate unauthorized access and automate management of keys and industrial cards.",
];

const portfolioItems = [
  "Advanced Asset Tracking Solutions",
  "Smart Industrial Locking and Access Management Systems for Harsh/Hazardous Areas",
  "Intelligent Key/Card Management and Accountability Platforms",
  "Customized Security and Operational Control Solutions",
];

const missionPoints = [
  "Design and deliver customized smart solutions that enhance safety, security, and visibility across industrial operations.",
  "Reduce operational risk and strengthen accountability through intelligent system integration.",
  "Provide commercially viable, easy-to-operate technologies that add measurable value to customer businesses.",
  "Support contractors and end users with reliable solutions meeting industry standards and compliance requirements.",
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
          title="Specialized Intelligent Systems for Demanding Industrial Environments"
          description="Itechsol (Innovative Technical Solutions) serves various industries and contractors with customized intelligent systems designed to strengthen operational processes."
        />
        <div className="mt-8 card-shell space-y-5 p-7 text-base leading-7 text-slate-700">
          <p>
            We deliver engineered solutions that address critical challenges
            related to asset visibility, access control, key management, and
            infrastructure security to improve safety, traceability,
            accountability, and operational efficiency.
          </p>
          <p>
            Understanding the complexity of industrial environments, we follow a
            consultative and engineering-driven approach. Our team evaluates site
            conditions, workflows, compliance requirements, and risk exposure
            before designing solutions that integrate seamlessly with existing
            systems.
          </p>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeading
          eyebrow="Core Solutions"
          title="Comprehensive Portfolio for Visibility, Access, and Accountability"
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
            <p className="section-eyebrow">Vision</p>
            <p className="mt-4 text-base leading-7 text-slate-700">
              To become a trusted technology partner for industries, delivering
              intelligent, secure, and scalable solutions that transform
              operational control and infrastructure protection.
            </p>
          </article>
          <article className="card-shell p-6">
            <p className="section-eyebrow">Our Commitment</p>
            <p className="mt-4 text-base leading-7 text-slate-700">
              We help organizations strengthen control, improve traceability,
              reduce risk, and enhance productivity, turning operational
              challenges into intelligent and reliable systems.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeading eyebrow="Mission" title="How We Deliver Measurable Value" />
        <div className="mt-8 grid gap-4">
          {missionPoints.map((item) => (
            <div key={item} className="card-shell flex items-start gap-3 p-5">
              <span className="mt-1 text-lg text-teal-700">✔</span>
              <p className="text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
