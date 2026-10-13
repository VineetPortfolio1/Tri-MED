/* Original botanical artwork, drawn as inline SVG so there are no external image links. */

export function HeroArt() {
  return (
    <svg
      viewBox="0 0 480 600"
      role="img"
      aria-label="Illustration of a calm sunrise over soft sage hills with leafy branches"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <clipPath id="hero-arch">
          <path d="M0 600V230C0 103 107 0 240 0s240 103 240 230v370Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#hero-arch)">
        <rect width="480" height="600" fill="#e9e0cc" />
        <circle cx="300" cy="215" r="92" fill="#f4ead2" />
        <circle cx="300" cy="215" r="60" fill="#faf3df" />
        <path d="M0 400c80-60 160-70 250-30s160 30 230-20v250H0Z" fill="#b4c0aa" />
        <path d="M0 450c90-50 170-40 260 0s150 20 220-10v160H0Z" fill="#7f9276" />
        <path d="M0 520c100-30 190-20 280 10s140 10 200-6v76H0Z" fill="#4a5e45" />
        <g stroke="#2f3f2c" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85">
          <path d="M70 600c4-70 2-130-12-190" />
          <path d="M96 600c-2-60 4-110 20-160" />
        </g>
        <g fill="#2f3f2c" opacity="0.85">
          <path d="M58 410c-26 0-40-20-38-44 26 2 40 20 38 44Z" />
          <path d="M62 450c24-4 38-22 38-44-24 4-38 22-38 44Z" />
          <path d="M56 490c-24-2-36-20-34-42 24 0 36 18 34 42Z" />
          <path d="M116 440c-22-2-32-22-28-44 22 4 32 22 28 44Z" />
          <path d="M112 490c22-4 34-22 32-44-22 4-34 22-32 44Z" />
        </g>
      </g>
      <path
        d="M0 600V230C0 103 107 0 240 0s240 103 240 230v370Z"
        fill="none"
        stroke="#4a5e45"
        strokeOpacity="0.25"
        strokeWidth="2"
      />
    </svg>
  );
}

export function AboutArt() {
  return (
    <svg
      viewBox="0 0 520 560"
      role="img"
      aria-label="Illustration of layered arches in sage and sand tones with a single leafy stem"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="520" height="560" fill="#e6ebe0" />
      <path d="M60 560V260c0-110 90-190 200-190s200 80 200 190v300Z" fill="#b4c0aa" />
      <path d="M120 560V280c0-80 62-140 140-140s140 60 140 140v280Z" fill="#efe7d8" />
      <path d="M180 560V300c0-52 36-92 80-92s80 40 80 92v260Z" fill="#7f9276" />
      <circle cx="400" cy="110" r="34" fill="#faf3df" />
      <g stroke="#2f3f2c" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M260 560V330" />
      </g>
      <g fill="#2f3f2c">
        <path d="M260 380c-34 0-52-24-50-52 34 2 52 24 50 52Z" />
        <path d="M260 430c32-4 50-26 48-54-32 4-50 26-48 54Z" />
        <path d="M260 490c-30-2-46-22-44-48 30 0 46 20 44 48Z" />
      </g>
      <rect x="0" y="540" width="520" height="20" fill="#4a5e45" />
    </svg>
  );
}

export function Avatar({ initials, tone = 0 }) {
  const tones = [
    ['#b4c0aa', '#4a5e45'],
    ['#e2d6bf', '#55584f'],
    ['#7f9276', '#faf6ee'],
  ];
  const [bg, fg] = tones[tone % tones.length];
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={`Placeholder portrait for ${initials}`}>
      <rect width="200" height="200" fill={bg} />
      <circle cx="100" cy="80" r="34" fill={fg} opacity="0.22" />
      <path d="M32 200c4-48 32-70 68-70s64 22 68 70Z" fill={fg} opacity="0.22" />
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="54"
        fontWeight="500"
        fill={fg}
      >
        {initials}
      </text>
    </svg>
  );
}
