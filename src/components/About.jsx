import { AboutArt } from './Art.jsx';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section id="about" className="section section--sage" aria-labelledby="about-title">
      <div className="container about">
        <Reveal className="about__art">
          <AboutArt />
        </Reveal>

        <div className="about__copy">
          <Reveal as="span" className="eyebrow">
            About the practice
          </Reveal>
          <Reveal as="h2" id="about-title" delay={60}>
            A quieter kind of <em className="accent">clinic</em>
          </Reveal>
          <Reveal as="p" delay={120}>
            SereneMind was imagined as a place where appointments feel unhurried and every person
            is treated as more than a list of symptoms. Rooms are calm, conversations are
            thorough, and plans are written in plain language.
          </Reveal>
          <Reveal as="p" delay={180}>
            We believe good mental healthcare is built on trust. That means taking time to listen,
            being honest about what we know and don't know, and working alongside the other people
            who support your wellbeing.
          </Reveal>
          <Reveal as="blockquote" className="about__quote" delay={240}>
            Care should feel like a conversation, not a checklist.
            <cite>Practice philosophy (fictional)</cite>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
