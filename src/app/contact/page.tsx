import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";

const mobileNumber = "+971555996088";
const displayNumber = "+971 55 599 6088";
const email = "sales@itechsol-meai.com";
const locationText = "Bin Brook building hamdan st abu dhabi";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Itechsol in UAE for smart industrial locking, RFID asset tracking, and intelligent access and key management solutions.",
};

export default function ContactPage() {
  return (
    <section className="section-shell">
      <SectionHeading
        className="section-fade"
        eyebrow="Contact us"
        title="Reach Itechsol"
        description="Discuss requirements, request a demo, or send your technical enquiry to our engineering team."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <SpotlightCard className="card-shell section-fade section-fade-delay-1 space-y-4 p-6 text-slate-700">
          <h2 className="font-rajdhani text-2xl font-bold text-slate-900">
            UAE office
          </h2>
          <p>Innovative Technical Solutions (Itechsol)</p>
          <p className="font-medium">{locationText}</p>
          <p>
            Mobile:{" "}
            <a className="text-teal-700 underline" href={`tel:${mobileNumber}`}>
              {displayNumber}
            </a>
          </p>
          <p>
            Email:{" "}
            <a className="text-teal-700 underline" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`https://wa.me/${mobileNumber.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              WhatsApp Chat
            </a>
            <Link href="/contact#enquiry" className="btn-secondary">
              Request a Demo
            </Link>
          </div>
        </SpotlightCard>

        <SpotlightCard id="enquiry" className="card-shell section-fade section-fade-delay-2 p-6">
          <h2 className="font-rajdhani text-2xl font-bold text-slate-900">
            Send an inquiry
          </h2>
          <p className="mt-2 text-slate-600">
            Complete the form and our team will get back to you.
          </p>
          <form className="mt-5 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold">
                Name
              </label>
              <input id="name" name="name" type="text" required />
            </div>
            <div>
              <label htmlFor="company" className="mb-1 block text-sm font-semibold">
                Company
              </label>
              <input id="company" name="company" type="text" required />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold">
                Email
              </label>
              <input id="email" name="email" type="email" required />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold">
                Message
              </label>
              <textarea id="message" name="message" rows={5} required />
            </div>
            <button type="submit" className="btn-primary">
              Send Inquiry
            </button>
          </form>
        </SpotlightCard>
      </div>

      <article className="card-shell mt-8 overflow-hidden section-fade section-fade-delay-3">
        <iframe
          title="Itechsol office location map"
          src="https://www.google.com/maps?q=Bin%20Brook%20Building%20Hamdan%20Street%20Abu%20Dhabi&output=embed"
          className="h-[360px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </article>
    </section>
  );
}
