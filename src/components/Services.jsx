import { Stethoscope, Pill, Leaf, ClipboardList, ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';

const SERVICES = [
  {
    icon: Stethoscope,
    title: 'Psychiatric consultations',
    text: 'An in-depth first conversation to understand your concerns, background and what you hope to change. No two consultations follow the same script.',
  },
  {
    icon: Pill,
    title: 'Medication management',
    text: 'Where medication is part of a plan, we review options with you, explain what to expect and check in regularly so the plan stays right for you.',
  },
  {
    icon: Leaf,
    title: 'Integrative mental wellness',
    text: 'Conversations about sleep, stress, movement and nutrition, alongside other supports that complement clinical care.',
  },
  {
    icon: ClipboardList,
    title: 'Ongoing treatment planning',
    text: 'Regular reviews to revisit goals, celebrate progress and adjust the plan as your life and needs change.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <div className="section__head section__head--split">
          <div>
            <Reveal as="span" className="eyebrow">
              Services
            </Reveal>
            <Reveal as="h2" id="services-title" delay={60}>
              Support, <em className="accent">tailored to you</em>
            </Reveal>
          </div>
          <Reveal as="p" className="lead" delay={120}>
            Illustrative service descriptions for a fictional practice. Individual experiences and
            outcomes vary, and nothing here promises a particular result.
          </Reveal>
        </div>

        <div className="cards">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="article" key={title} className="card" delay={i * 90}>
              <span className="card__icon">
                <Icon size={26} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact" className="card__link">
                Ask about this <ArrowRight size={16} aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
