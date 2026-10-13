export function LogoMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="23" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path d="M24 38V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 27c-8 0-12-5-12-12 8 0 12 5 12 12Z" fill="var(--sage-700)" />
      <path d="M24 22c0-7 4-12 12-12 0 7-4 12-12 12Z" fill="var(--beige-deep)" stroke="var(--sage-700)" strokeWidth="1" />
    </svg>
  );
}

export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <LogoMark />
      <span className="logo__text">
        <span className="logo__name">SereneMind</span>
        <span className="logo__sub">Integrative Psychiatry</span>
      </span>
    </span>
  );
}
