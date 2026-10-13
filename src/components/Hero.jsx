import { ArrowRight, Leaf } from 'lucide-react';
import { HeroArt } from './Art.jsx';
import Reveal from './Reveal.jsx';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal as="span" className="eyebrow">
            Whole-person mental healthcare
          </Reveal>
          <Reveal as="h1" id="hero-title" delay={80}>
            Space to breathe,
            <br />
            <em className="accent">and be heard.</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={160}>
            SereneMind pairs thoughtful psychiatric care with a view of the whole person: your
            history, your habits and your goals, so that every plan is shaped around you.
          </Reveal>
          <Reveal className="hero__actions" delay={240}>
            <a href="#approach" className="btn btn--primary">
              Explore Our Approach <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Our Team
            </a>
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={120}>
          <div className="hero__art">
            <HeroArt />
          </div>
          <div className="hero__badge" aria-hidden="true">
            <Leaf size={20} />
            <span>Unhurried, personal, collaborative</span>
          </div>
          <span className="hero__dot hero__dot--a" aria-hidden="true" />
          <span className="hero__dot hero__dot--b" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
