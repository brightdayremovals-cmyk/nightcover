import LeadForm from "./LeadForm";

export default function PilotFormSection() {
  return (
    <section id="pilot-form" className="bg-stone-alt py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-xl">
          <h2 className="font-serif text-3xl text-ink">Request the 10-hour pilot</h2>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
