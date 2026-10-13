import { HeartHandshake, Users, Sprout, Compass } from 'lucide-react';
import Reveal from './Reveal.jsx';

const PRINCIPLES = [
  {
    icon: Compass,
    title: 'Personalized care',
    text: 'No two stories are alike. We begin by listening, then build a plan around your circumstances, preferences and goals.',
  },
  {
    icon: Users,
    title: 'Collaborative treatment',
    text: 'Decisions are made with you, not for you. You are an active partner at every step, and we explain the reasoning behind each option.',
  },
  {
    icon: Sprout,
    title: 'Lifestyle considerations',
    text: 'Sleep, movement, nutrition and daily routines can all shape how we feel. We talk about them alongside any other part of your care.',
  },
  {
    icon: HeartHandshake,
    title: 'Compassionate support',
    text: 'A calm, respectful space where questions are welcome and no concern is too small to raise.',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section section--beige" aria-labelledby="approach-title">
      <div className="container">
        <div className="section__head">
          <Reveal as="span" className="eyebrow">
            Our approach
          </Reveal>
          <Reveal as="h2" id="approach-title" delay={60}>
            Care that looks at the <em className="accent">whole picture</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={120}>
            Integrative psychiatry brings together conventional psychiatric care and attention to the
            wider parts of life that influence wellbeing. This is a fictional clinic, and the
            descriptions below are illustrative.
          </Reveal>
        </div>

        <ul className="principles">
          {PRINCIPLES.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} className="principle" delay={i * 90}>
              <span className="principle__icon">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
