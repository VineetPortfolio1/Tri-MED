import { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './Reveal.jsx';

const FAQS = [
  {
    q: 'What happens in a first consultation?',
    a: 'In a real practice, a first visit is usually a conversation about your concerns, your history and your goals. In this fictional clinic, we imagine it as an unhurried discussion with time for your questions, ending with a shared plan for next steps.',
  },
  {
    q: 'How do I make an appointment inquiry?',
    a: 'Use the contact form on this page to send a short message. Because SereneMind is a demo, the form does not send anything to a real clinic.',
  },
  {
    q: 'What should I bring with me?',
    a: 'Many people find it helpful to bring a list of questions, a note of any current medications and any relevant records. Bring whatever helps you feel prepared.',
  },
  {
    q: 'Is integrative care a replacement for conventional treatment?',
    a: 'Integrative care is meant to complement conventional care, not replace it. Any plan should be discussed openly with your clinician so you understand the options and the evidence behind them.',
  },
  {
    q: 'Can I use this site in an emergency?',
    a: 'No. This is a design demo and is never monitored. If you or someone else is in crisis or in danger, contact your local emergency number or a crisis service in your area right away.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section section--beige" aria-labelledby="faq-title">
      <div className="container faq">
        <div className="faq__intro">
          <Reveal as="span" className="eyebrow">
            FAQ
          </Reveal>
          <Reveal as="h2" id="faq-title" delay={60}>
            Questions, <em className="accent">answered</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={120}>
            A few practical things people often like to know before reaching out.
          </Reveal>
        </div>

        <Reveal className="faq__list" delay={100}>
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={q}>
                <h3 className="faq__q">
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{q}</span>
                    <Plus size={22} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="faq__panel"
                >
                  <div className="faq__panel-inner">
                    <p>{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
