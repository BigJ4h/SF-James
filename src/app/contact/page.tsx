import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-sf-muted">
            Contact
          </p>
          <h1 className="font-display text-3xl tracking-[0.12em]">Contact the studio</h1>
          <p className="text-sm text-sf-muted sm:text-base">
            For sizing questions, custom singlet inquiries or order assistance, we&apos;d love
            to hear from you. Share a few details below and our team will respond within 1–2
            business days.
          </p>
          <div className="card-soft p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
        <div className="space-y-6 text-sm text-sf-muted">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sf-muted">
              Studio email
            </p>
            <p className="mt-1 text-sf-black">studio@sf-james.com</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sf-muted">
              Location
            </p>
            <p className="mt-1">
              United States
              <br />
              Private studio, visits by appointment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

