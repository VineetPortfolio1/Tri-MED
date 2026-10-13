import { Avatar } from './Art.jsx';
import Reveal from './Reveal.jsx';

const TEAM = [
  {
    name: 'Alex Rowan',
    initials: 'AR',
    role: 'Lead Clinician (sample profile)',
    bio: 'A fictional profile showing how a clinician introduction might read: interests, approach and what a first conversation feels like.',
  },
  {
    name: 'Jordan Ellis',
    initials: 'JE',
    role: 'Integrative Wellness Lead (sample profile)',
    bio: 'A fictional profile focused on lifestyle conversations such as sleep, routine and stress, designed to sit alongside clinical care.',
  },
  {
    name: 'Morgan Avery',
    initials: 'MA',
    role: 'Patient Care Coordinator (sample profile)',
    bio: 'A fictional profile for the person who helps with scheduling, questions and making sure no one gets lost between visits.',
  },
];

export default function Team() {
  return (
    <section id="team" className="section" aria-labelledby="team-title">
      <div className="container">
        <div className="section__head">
          <Reveal as="span" className="eyebrow">
            Meet the team
          </Reveal>
          <Reveal as="h2" id="team-title" delay={60}>
            The people <em className="accent">behind SereneMind</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={120}>
            All profiles are fictional placeholders. The names and roles are invented, and no
            credentials or licences are claimed or implied.
          </Reveal>
        </div>

        <div className="team">
          {TEAM.map((p, i) => (
            <Reveal as="article" key={p.name} className="member" delay={i * 90}>
              <div className="member__photo">
                <Avatar initials={p.initials} tone={i} />
              </div>
              <h3>{p.name}</h3>
              <p className="member__role">{p.role}</p>
              <p>{p.bio}</p>
              <p className="member__cred">Credentials: placeholder, not real</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
