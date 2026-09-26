"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Are the agents in the UK?",
    a: "The operating desk is outside the UK. Agents are British-English trained and scored weekly on accent, manner and accuracy. Clients judge the calls, not the postcode.",
  },
  {
    q: "Will customers know?",
    a: "Only if you want them to. They hear your company name.",
  },
  {
    q: "Can you do cold calling?",
    a: "Not as the default product. After-hours and inbound first.",
  },
  {
    q: "Minimum term?",
    a: "Pilot first. There is no long contract to sign before you have heard how the calls sound.",
  },
  {
    q: "Tools?",
    a: "Phone plus email or CRM notes. We work with your existing number, Teams, email, and common CRMs.",
  },
  {
    q: "What if a call goes badly?",
    a: "Flag it and we pull the agent from your queue the same day. A supervisor reviews the call and a replacement is briefed before the next shift.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <h2 className="font-serif text-3xl text-ink">Questions</h2>
      <div className="mt-8 divide-y divide-line border-t border-line">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.q}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="text-base font-medium text-ink">{faq.q}</span>
                <span className="ml-4 text-lg text-gold" aria-hidden="true">
                  {isOpen ? "\u2212" : "+"}
                </span>
              </button>
              {isOpen && (
                <p id={`faq-panel-${i}`} className="pb-5 text-sm leading-relaxed text-ink-soft">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
